// Generate placeholder book covers
function generatePlaceholderBookCovers() {
    // Create canvas for English book covers
    for (let i = 1; i <= 8; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 450;
        const ctx = canvas.getContext('2d');
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#1e40af');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 450);
        
        // Book title area
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(20, 150, 260, 150);
        
        // Book title text
        ctx.fillStyle = '#1e3a8a';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Crypto Book', 150, 200);
        
        // Book number
        ctx.fillStyle = '#1e3a8a';
        ctx.font = '18px Arial';
        ctx.fillText(`Volume ${i}`, 150, 230);
        
        // CryptoMall logo
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CryptoMall', 150, 420);
        
        // Save the canvas as an image
        const imgData = canvas.toDataURL('image/jpeg');
        const img = document.createElement('img');
        img.src = imgData;
        
        // Replace missing book cover with generated placeholder
        const bookCovers = document.querySelectorAll(`.book-card[data-lang="en"] img[src*="images/books/${getBookFileName(i)}"]`);
        bookCovers.forEach(cover => {
            cover.src = imgData;
        });
    }
    
    // Create canvas for Spanish book covers
    for (let i = 1; i <= 8; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 450;
        const ctx = canvas.getContext('2d');
        
        // Background gradient (different color for Spanish)
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, '#f59e0b');
        gradient.addColorStop(1, '#b45309');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 450);
        
        // Book title area
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(20, 150, 260, 150);
        
        // Book title text
        ctx.fillStyle = '#92400e';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Libro Cripto', 150, 200);
        
        // Book number
        ctx.fillStyle = '#92400e';
        ctx.font = '18px Arial';
        ctx.fillText(`Volumen ${i}`, 150, 230);
        
        // CryptoMall logo
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CryptoMall', 150, 420);
        
        // Save the canvas as an image
        const imgData = canvas.toDataURL('image/jpeg');
        const img = document.createElement('img');
        img.src = imgData;
        
        // Replace missing book cover with generated placeholder
        const bookCovers = document.querySelectorAll(`.book-card[data-lang="es"] img[src*="images/books/es/${getBookFileName(i)}"]`);
        bookCovers.forEach(cover => {
            cover.src = imgData;
        });
    }
}

// Helper function to get book filename based on index
function getBookFileName(index) {
    const fileNames = [
        'mastering_bitcoin.jpg',
        'infinite_machine.jpg',
        'defi_future.jpg',
        'crypto_inheritance.jpg',
        'nft_handbook.jpg',
        'crypto_taxes.jpg',
        'crypto_mining.jpg',
        'privacy_security.jpg'
    ];
    
    return fileNames[index - 1] || `book${index}.jpg`;
}

// Call the function when DOM is loaded and when images fail to load
document.addEventListener('DOMContentLoaded', function() {
    // Check for image loading errors and replace with placeholders
    document.querySelectorAll('.book-card img').forEach(img => {
        img.onerror = function() {
            // Replace with placeholder based on language
            const isSpanish = img.closest('.book-card').getAttribute('data-lang') === 'es';
            const bookIndex = getBookIndexFromSrc(img.src);
            
            // Create canvas for placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 450;
            const ctx = canvas.getContext('2d');
            
            // Background gradient (different color based on language)
            const gradient = ctx.createLinearGradient(0, 0, 0, 450);
            if (isSpanish) {
                gradient.addColorStop(0, '#f59e0b');
                gradient.addColorStop(1, '#b45309');
            } else {
                gradient.addColorStop(0, '#3b82f6');
                gradient.addColorStop(1, '#1e40af');
            }
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 300, 450);
            
            // Book title area
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(20, 150, 260, 150);
            
            // Book title text
            ctx.fillStyle = isSpanish ? '#92400e' : '#1e3a8a';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(isSpanish ? 'Libro Cripto' : 'Crypto Book', 150, 200);
            
            // Book number
            ctx.font = '18px Arial';
            ctx.fillText(isSpanish ? `Volumen ${bookIndex}` : `Volume ${bookIndex}`, 150, 230);
            
            // CryptoMall logo
            ctx.fillStyle = 'white';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('CryptoMall', 150, 420);
            
            // Set the placeholder image
            img.src = canvas.toDataURL('image/jpeg');
        };
    });
});

// Helper function to get book index from src
function getBookIndexFromSrc(src) {
    const fileNames = [
        'mastering_bitcoin',
        'infinite_machine',
        'defi_future',
        'crypto_inheritance',
        'nft_handbook',
        'crypto_taxes',
        'crypto_mining',
        'privacy_security'
    ];
    
    for (let i = 0; i < fileNames.length; i++) {
        if (src.includes(fileNames[i])) {
            return i + 1;
        }
    }
    
    // Default to 1 if not found
    return 1;
}
