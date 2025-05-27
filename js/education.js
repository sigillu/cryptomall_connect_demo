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
        if (hash && ['guides', 'articles', 'videos', 'books', 'glossary', 'faq'].includes(hash)) {
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
    
    if (tagContainer && clearTagsButton) {
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
                if (filterCount) {
                    filterCount.textContent = selectedTags.size;
                }
                
                // Show/hide active filters indicator
                if (activeFilters) {
                    if (selectedTags.size > 0) {
                        activeFilters.classList.remove('hidden');
                    } else {
                        activeFilters.classList.add('hidden');
                    }
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
            
            if (filterCount) {
                filterCount.textContent = '0';
            }
            
            if (activeFilters) {
                activeFilters.classList.add('hidden');
            }
            
            // Show all content items
            document.querySelectorAll('.content-item').forEach(item => {
                item.style.display = '';
            });
        });
        
        // Filter content based on selected tags
        function filterContent() {
            // Get all content items again to ensure we have the latest
            const allContentItems = document.querySelectorAll('.content-item');
            
            // Count visible items for debugging
            let visibleCount = 0;
            
            if (selectedTags.size === 0) {
                // Show all items if no tags selected
                allContentItems.forEach(item => {
                    item.style.display = '';
                    visibleCount++;
                });
                console.log(`No filters applied. Showing all ${visibleCount} items.`);
                return;
            }
            
            // Filter items based on selected tags
            allContentItems.forEach(item => {
                const itemTagsAttr = item.getAttribute('data-tags');
                
                // Skip items without data-tags attribute
                if (!itemTagsAttr) {
                    item.style.display = 'none';
                    return;
                }
                
                const itemTags = itemTagsAttr.split(' ');
                
                // Check if any of the selected tags match this item's tags
                const hasMatchingTag = Array.from(selectedTags).some(tag => itemTags.includes(tag));
                
                if (hasMatchingTag) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            console.log(`Applied filters: ${Array.from(selectedTags).join(', ')}. Showing ${visibleCount} items.`);
        }
        
        // Initial filter application (in case URL has hash parameters)
        if (window.location.hash.includes('tag=')) {
            const tagParam = new URLSearchParams(window.location.hash.substring(1)).get('tag');
            if (tagParam) {
                const tagElement = document.querySelector(`.tag[data-tag="${tagParam}"]`);
                if (tagElement) {
                    tagElement.classList.add('selected');
                    selectedTags.add(tagParam);
                    
                    if (filterCount) {
                        filterCount.textContent = '1';
                    }
                    
                    if (activeFilters) {
                        activeFilters.classList.remove('hidden');
                    }
                    
                    filterContent();
                }
            }
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
    
    // Check if page was loaded with a direct link to specific tabs
    const hashLinks = ['videos', 'books'];
    for (const link of hashLinks) {
        if (window.location.href.includes(`#${link}`)) {
            // Activate the tab
            activateTab(link);
            
            // Scroll to filter section
            if (filterSection) {
                setTimeout(() => {
                    filterSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            break;
        }
    }
});
