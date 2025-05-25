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
                if (itemLang === lang || !itemLang) {
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
    }
});
