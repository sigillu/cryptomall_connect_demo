/**
 * CryptoMall Navigation and UI Functionality
 * Unified JavaScript file for consistent behavior across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });
    }
    
    // Login state management
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            authSection.innerHTML = `
                <div class="relative">
                    <button id="user-menu" class="flex items-center text-sm font-medium text-primary hover:underline">
                        Admin <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div id="user-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border dark:bg-gray-800 dark:border-gray-700">
                        <a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Profile</a>
                        <a href="admin.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Admin Dashboard</a>
                        <a href="#" id="logout-button" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Log out</a>
                    </div>
                </div>
            `;
            
            // Re-attach event listeners for the newly created elements
            setupUserMenuListeners();
        }
    }
    
    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple demo authentication
            if (email === 'admin@admin.com' && password === 'admin') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials. Use admin@admin.com / admin');
            }
        });
    }
    
    // Setup user menu dropdown listeners
    function setupUserMenuListeners() {
        const userMenu = document.getElementById('user-menu');
        const userDropdown = document.getElementById('user-dropdown');
        const logoutButton = document.getElementById('logout-button');
        
        if (userMenu && userDropdown) {
            userMenu.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                userDropdown.classList.toggle('hidden');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (userMenu && !userMenu.contains(event.target) && 
                    userDropdown && !userDropdown.contains(event.target)) {
                    userDropdown.classList.add('hidden');
                }
            });
        }
        
        if (logoutButton) {
            logoutButton.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                window.location.href = 'index.html';
            });
        }
    }
    
    // Call this function to ensure any static user menu elements also get listeners
    setupUserMenuListeners();
});
