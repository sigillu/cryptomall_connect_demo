// Language and filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Set initial language state
    document.documentElement.setAttribute('lang', currentLang);
    document.body.setAttribute('data-language', currentLang);
    updateLanguageContent(currentLang);
    
    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const newLang = document.body.getAttribute('data-language') === 'en' ? 'es' : 'en';
            document.documentElement.setAttribute('lang', newLang);
            document.body.setAttribute('data-language', newLang);
            localStorage.setItem('language', newLang);
            updateLanguageContent(newLang);
        });
    }
    
    // Function to update content based on language
    function updateLanguageContent(lang) {
        const elements = document.querySelectorAll('[data-en], [data-es]');
        
        elements.forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                element.innerHTML = element.getAttribute(`data-${lang}`);
            }
        });
        
        // Update book images for the Books section
        const bookImages = document.querySelectorAll('.book-card img');
        bookImages.forEach(img => {
            const src = img.getAttribute('src');
            if (src && src.includes('images/books/')) {
                if (lang === 'es' && !src.includes('/es/')) {
                    img.setAttribute('src', src.replace('images/books/', 'images/books/es/'));
                } else if (lang === 'en' && src.includes('/es/')) {
                    img.setAttribute('src', src.replace('images/books/es/', 'images/books/'));
                }
            }
        });
        
        // Update language-specific content items
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(item => {
            if (item.hasAttribute('data-lang')) {
                const itemLang = item.getAttribute('data-lang');
                if (itemLang === lang) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });
        
        // Update language indicator in UI
        const langIndicator = document.getElementById('current-language');
        if (langIndicator) {
            langIndicator.textContent = lang === 'en' ? 'EN' : 'ES';
        }
        
        // Apply active filters after language change
        applyActiveFilters();
    }
    
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('tab-active'));
            tabPanes.forEach(pane => pane.classList.add('hidden'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('tab-active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
            
            // Apply active filters to the newly visible tab
            applyActiveFilters();
        });
    });
    
    // Tag filtering functionality
    const tags = document.querySelectorAll('.tag');
    const clearTagsButton = document.getElementById('clear-tags');
    const activeFiltersElement = document.getElementById('active-filters');
    const filterCountElement = document.getElementById('filter-count');
    let activeFilters = [];
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tagName = tag.getAttribute('data-tag');
            
            if (tag.classList.contains('selected')) {
                // Remove from active filters
                tag.classList.remove('selected');
                activeFilters = activeFilters.filter(filter => filter !== tagName);
            } else {
                // Add to active filters
                tag.classList.add('selected');
                activeFilters.push(tagName);
            }
            
            applyActiveFilters();
        });
    });
    
    clearTagsButton.addEventListener('click', () => {
        tags.forEach(tag => tag.classList.remove('selected'));
        activeFilters = [];
        applyActiveFilters();
    });
    
    function applyActiveFilters() {
        const currentLang = document.body.getAttribute('data-language') || 'en';
        const contentItems = document.querySelectorAll('.content-item');
        
        // Update filter count and visibility
        filterCountElement.textContent = activeFilters.length;
        if (activeFilters.length > 0) {
            activeFiltersElement.classList.remove('hidden');
        } else {
            activeFiltersElement.classList.add('hidden');
        }
        
        // Apply filters to content items
        contentItems.forEach(item => {
            // First check language
            if (item.hasAttribute('data-lang')) {
                const itemLang = item.getAttribute('data-lang');
                if (itemLang !== currentLang) {
                    item.classList.add('hidden');
                    return; // Skip further processing for items in wrong language
                }
            }
            
            // Then apply tag filters if any are active
            if (activeFilters.length > 0) {
                const itemTags = item.getAttribute('data-tags')?.split(' ') || [];
                const hasMatchingTag = activeFilters.some(filter => itemTags.includes(filter));
                
                if (hasMatchingTag) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            } else {
                // No active filters, show all items in current language
                if (!item.hasAttribute('data-lang') || item.getAttribute('data-lang') === currentLang) {
                    item.classList.remove('hidden');
                }
            }
        });
    }
    
    // Initialize the UI
    // Show the first tab by default
    tabButtons[0].classList.add('tab-active');
    tabPanes[0].classList.remove('hidden');
    
    // Apply initial language and filters
    updateLanguageContent(currentLang);
});
