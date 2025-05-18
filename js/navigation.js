/**
 * CryptoMall Navigation and Authentication Script
 * Handles user authentication, dark mode toggle, and admin dropdown functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
    }
    
    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Authentication handling
    const authSection = document.getElementById('auth-section');
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole') || 'user';
    
    if (isLoggedIn && authSection) {
        // Create dropdown container
        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'relative';
        
        // Create dropdown button
        const dropdownButton = document.createElement('button');
        dropdownButton.className = 'flex items-center text-sm font-medium text-primary hover:underline focus:outline-none';
        dropdownButton.id = 'admin-dropdown-button';
        dropdownButton.innerHTML = `
            Admin
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                <path d="m6 9 6 6 6-6"/>
            </svg>
        `;
        
        // Create dropdown menu
        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'absolute right-0 mt-2 w-48 bg-white dark-mode:bg-gray-800 rounded-md shadow-lg py-1 z-50 hidden';
        dropdownMenu.id = 'admin-dropdown-menu';
        
        // Add dropdown items
        dropdownMenu.innerHTML = `
            <a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 dark-mode:text-gray-200 hover:bg-primary hover:text-white">Profile</a>
            ${userRole === 'admin' ? '<a href="admin.html" class="block px-4 py-2 text-sm text-gray-700 dark-mode:text-gray-200 hover:bg-primary hover:text-white">Admin Dashboard</a>' : ''}
            <a href="profile.html#settings" class="block px-4 py-2 text-sm text-gray-700 dark-mode:text-gray-200 hover:bg-primary hover:text-white">Settings</a>
            <button id="logout-button" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark-mode:text-gray-200 hover:bg-primary hover:text-white">Log out</button>
        `;
        
        // Append dropdown elements
        dropdownContainer.appendChild(dropdownButton);
        dropdownContainer.appendChild(dropdownMenu);
        
        // Replace auth section content
        authSection.innerHTML = '';
        authSection.appendChild(dropdownContainer);
        
        // Toggle dropdown on click
        const adminDropdownButton = document.getElementById('admin-dropdown-button');
        const adminDropdownMenu = document.getElementById('admin-dropdown-menu');
        
        if (adminDropdownButton && adminDropdownMenu) {
            // Fix for dropdown hover behavior
            let isDropdownOpen = false;
            
            adminDropdownButton.addEventListener('click', function(e) {
                e.stopPropagation();
                isDropdownOpen = !isDropdownOpen;
                if (isDropdownOpen) {
                    adminDropdownMenu.classList.remove('hidden');
                } else {
                    adminDropdownMenu.classList.add('hidden');
                }
            });
            
            // Keep dropdown open when hovering over menu
            adminDropdownMenu.addEventListener('mouseenter', function() {
                isDropdownOpen = true;
                adminDropdownMenu.classList.remove('hidden');
            });
            
            adminDropdownMenu.addEventListener('mouseleave', function() {
                if (!adminDropdownButton.matches(':hover')) {
                    isDropdownOpen = false;
                    adminDropdownMenu.classList.add('hidden');
                }
            });
            
            adminDropdownButton.addEventListener('mouseenter', function() {
                if (isDropdownOpen) {
                    adminDropdownMenu.classList.remove('hidden');
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (adminDropdownButton && !adminDropdownButton.contains(e.target) && !adminDropdownMenu.contains(e.target)) {
                    isDropdownOpen = false;
                    adminDropdownMenu.classList.add('hidden');
                }
            });
            
            // Logout functionality
            const logoutButton = document.getElementById('logout-button');
            if (logoutButton) {
                logoutButton.addEventListener('click', function() {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('userRole');
                    window.location.reload();
                });
            }
        }
    }
    
    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Demo credentials check
            if (email === 'admin@admin.com' && password === 'admin') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userRole', 'admin');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials. For demo, use admin@admin.com / admin');
            }
        });
    }
});
