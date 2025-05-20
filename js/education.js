/**
 * CryptoMall Education Hub Script
 * Handles tab switching, filtering, and scroll management for the Education Hub page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get tab buttons and content panes
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const filterSection = document.getElementById('filter-section');
    
    // Function to activate a specific tab
    function activateTab(tabId) {
        // Hide all tab panes
        tabPanes.forEach(pane => {
            pane.classList.add('hidden');
        });
        
        // Deactivate all tab buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('tab-active');
        });
        
        // Show the selected tab pane
        const selectedPane = document.getElementById(tabId);
        if (selectedPane) {
            selectedPane.classList.remove('hidden');
        }
        
        // Activate the corresponding tab button
        const selectedButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (selectedButton) {
            selectedButton.classList.add('tab-active');
        }
    }
    
    // Handle tab button clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Save current scroll position
            const currentScrollY = window.scrollY;
            
            // Activate the tab
            activateTab(tabId);
            
            // Restore scroll position
            window.scrollTo(0, currentScrollY);
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${tabId}`);
        });
    });
    
    // Handle URL hash changes
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash && ['guides', 'articles', 'videos', 'glossary', 'faq'].includes(hash)) {
            // Activate the tab based on hash
            activateTab(hash);
            
            // Scroll to filter section
            if (filterSection) {
                setTimeout(() => {
                    filterSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }
    
    // Initial hash handling
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Tag filtering functionality
    const tagContainer = document.getElementById('tag-container');
    const clearTagsButton = document.getElementById('clear-tags');
    const contentItems = document.querySelectorAll('.content-item');
    const activeFilters = document.getElementById('active-filters');
    const filterCount = document.getElementById('filter-count');
    
    if (tagContainer && clearTagsButton && contentItems) {
        const tags = tagContainer.querySelectorAll('.tag');
        const selectedTags = new Set();
        
        // Tag click handler
        tags.forEach(tag => {
            tag.addEventListener('click', function() {
                const tagValue = this.getAttribute('data-tag');
                
                if (this.classList.contains('selected')) {
                    // Deselect tag
                    this.classList.remove('selected');
                    selectedTags.delete(tagValue);
                } else {
                    // Select tag
                    this.classList.add('selected');
                    selectedTags.add(tagValue);
                }
                
                // Update filter count
                filterCount.textContent = selectedTags.size;
                
                // Show/hide active filters indicator
                if (selectedTags.size > 0) {
                    activeFilters.classList.remove('hidden');
                } else {
                    activeFilters.classList.add('hidden');
                }
                
                // Filter content items
                filterContent();
            });
        });
        
        // Clear tags button
        clearTagsButton.addEventListener('click', function() {
            tags.forEach(tag => {
                tag.classList.remove('selected');
            });
            selectedTags.clear();
            filterCount.textContent = '0';
            activeFilters.classList.add('hidden');
            
            // Show all content items
            contentItems.forEach(item => {
                item.style.display = '';
            });
        });
        
        // Filter content based on selected tags
        function filterContent() {
            if (selectedTags.size === 0) {
                // Show all items if no tags selected
                contentItems.forEach(item => {
                    item.style.display = '';
                });
                return;
            }
            
            // Filter items based on selected tags
            contentItems.forEach(item => {
                const itemTags = item.getAttribute('data-tags').split(' ');
                // Check if any of the selected tags match this item's tags
                const hasMatchingTag = Array.from(selectedTags).some(tag => itemTags.includes(tag));
                
                if (hasMatchingTag) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }
    
    // Glossary search functionality
    const glossarySearch = document.getElementById('glossary-search');
    const glossarySections = document.querySelectorAll('.glossary-section');
    
    if (glossarySearch && glossarySections.length > 0) {
        glossarySearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            glossarySections.forEach(section => {
                const terms = section.querySelectorAll('h3');
                let sectionHasMatch = false;
                
                terms.forEach(term => {
                    const termText = term.textContent.toLowerCase();
                    const termDefinition = term.nextElementSibling.textContent.toLowerCase();
                    const termContainer = term.parentElement;
                    
                    if (termText.includes(searchTerm) || termDefinition.includes(searchTerm)) {
                        termContainer.style.display = '';
                        sectionHasMatch = true;
                    } else {
                        termContainer.style.display = 'none';
                    }
                });
                
                // Show/hide entire section based on matches
                section.style.display = sectionHasMatch ? '' : 'none';
            });
        });
    }
    
    // Check if page was loaded with a direct link to the videos tab
    if (window.location.href.includes('#videos')) {
        // Activate videos tab
        activateTab('videos');
        
        // Scroll to filter section
        if (filterSection) {
            setTimeout(() => {
                filterSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
