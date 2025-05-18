/**
 * CryptoMall Admin Dashboard Script
 * Handles sidebar navigation and dashboard functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('block');
        });
    }
    
    // Sidebar navigation links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    if (sidebarLinks.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Prevent default only for demo links with # href
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    sidebarLinks.forEach(l => {
                        l.classList.remove('bg-primary-light', 'text-primary', 'border-r-2', 'border-primary');
                        l.classList.add('text-gray-700', 'hover:bg-gray-100');
                    });
                    
                    // Add active class to clicked link
                    this.classList.remove('text-gray-700', 'hover:bg-gray-100');
                    this.classList.add('bg-primary-light', 'text-primary', 'border-r-2', 'border-primary');
                    
                    // For demo purposes, show a notification
                    const section = this.textContent.trim();
                    showNotification(`Navigated to ${section} section`);
                }
            });
        });
    }
    
    // Function to show notification
    function showNotification(message) {
        // Check if notification container exists, create if not
        let notificationContainer = document.getElementById('notification-container');
        
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'notification-container';
            notificationContainer.className = 'fixed top-20 right-4 z-50';
            document.body.appendChild(notificationContainer);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'bg-primary text-white px-4 py-2 rounded shadow-lg mb-2 transform transition-all duration-300 translate-x-full';
        notification.textContent = message;
        
        // Add to container
        notificationContainer.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 10);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.add('opacity-0');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Handle approval/rejection buttons
    const approvalButtons = document.querySelectorAll('button.bg-green-100');
    const rejectionButtons = document.querySelectorAll('button.bg-red-100');
    
    approvalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const providerName = this.closest('.border').querySelector('h3').textContent;
            showNotification(`Approved: ${providerName}`);
            this.closest('.border').style.opacity = '0.5';
            this.disabled = true;
            this.nextElementSibling.disabled = true;
        });
    });
    
    rejectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const providerName = this.closest('.border').querySelector('h3').textContent;
            showNotification(`Rejected: ${providerName}`);
            this.closest('.border').style.opacity = '0.5';
            this.disabled = true;
            this.previousElementSibling.disabled = true;
        });
    });
});
