/**
 * CryptoMall Navigation and Authentication Script
 * Handles user authentication, dark mode toggle, and admin dropdown functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    }
    
    // Theme toggle click handler
    themeToggle?.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
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
        dropdownMenu.className = 'absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 hidden';
        dropdownMenu.id = 'admin-dropdown-menu';
        
        // Add dropdown items
        dropdownMenu.innerHTML = `
            <a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
            ${userRole === 'admin' ? '<a href="admin.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Admin Dashboard</a>' : ''}
            <button id="logout-button" class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Log out</button>
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
        
        adminDropdownButton.addEventListener('click', function(e) {
            e.stopPropagation();
            adminDropdownMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!adminDropdownButton.contains(e.target)) {
                adminDropdownMenu.classList.add('hidden');
            }
        });
        
        // Logout functionality
        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userRole');
            window.location.reload();
        });
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
