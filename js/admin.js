/**
 * CryptoMall Admin Dashboard Script
 * Handles admin dashboard functionality and sidebar navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Admin sidebar functionality
    const sidebarLinks = document.querySelectorAll('aside.sidebar nav a');
    const mainContent = document.querySelector('main');
    
    // Dashboard content templates
    const dashboardContent = {
        dashboard: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">Dashboard</h1>
                <p class="text-gray-500">Welcome back, Admin!</p>
            </div>
            
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-gray-500">Total Providers</h3>
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-baseline">
                        <h2 class="text-3xl font-bold">124</h2>
                        <span class="ml-2 text-sm text-green-500">+8% from last month</span>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-gray-500">Active Users</h3>
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-baseline">
                        <h2 class="text-3xl font-bold">3,521</h2>
                        <span class="ml-2 text-sm text-green-500">+12% from last month</span>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-gray-500">Quiz Completions</h3>
                        <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-baseline">
                        <h2 class="text-3xl font-bold">1,842</h2>
                        <span class="ml-2 text-sm text-green-500">+5% from last month</span>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-gray-500">Provider Connections</h3>
                        <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600">
                                <path d="M9 18V5l12-2v13"></path>
                                <circle cx="6" cy="18" r="3"></circle>
                                <circle cx="18" cy="16" r="3"></circle>
                            </svg>
                        </div>
                    </div>
                    <div class="flex items-baseline">
                        <h2 class="text-3xl font-bold">756</h2>
                        <span class="ml-2 text-sm text-green-500">+15% from last month</span>
                    </div>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <h2 class="text-lg font-bold mb-4">Recent Activity</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">User</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Action</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>John Smith</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Completed quiz</td>
                                <td class="py-3 px-4">May 18, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Sarah Johnson</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Updated profile</td>
                                <td class="py-3 px-4">May 17, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Michael Brown</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Connected with provider</td>
                                <td class="py-3 px-4">May 16, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Emily Davis</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Submitted review</td>
                                <td class="py-3 px-4">May 15, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>David Wilson</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Registered account</td>
                                <td class="py-3 px-4">May 14, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        providers: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">Providers Management</h1>
                <p class="text-gray-500">Manage service providers on the platform</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">Provider List</h2>
                    <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Add New Provider</button>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Provider</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Category</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Rating</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <span class="text-blue-600 font-medium">A</span>
                                        </div>
                                        <div>
                                            <div class="font-medium">Alex Chen</div>
                                            <div class="text-sm text-gray-500">CryptoSafe Solutions</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Security</td>
                                <td class="py-3 px-4">4.9 ★</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Suspend</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                            <span class="text-green-600 font-medium">S</span>
                                        </div>
                                        <div>
                                            <div class="font-medium">Sarah Johnson</div>
                                            <div class="text-sm text-gray-500">Crypto Tax Pros</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Tax</td>
                                <td class="py-3 px-4">4.8 ★</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Suspend</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                            <span class="text-purple-600 font-medium">M</span>
                                        </div>
                                        <div>
                                            <div class="font-medium">Michael Rodriguez</div>
                                            <div class="text-sm text-gray-500">BlockEd Academy</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-4">Education</td>
                                <td class="py-3 px-4">4.7 ★</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Suspend</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        users: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">User Management</h1>
                <p class="text-gray-500">Manage user accounts and permissions</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">User List</h2>
                    <div class="flex space-x-2">
                        <input type="text" placeholder="Search users..." class="border rounded-md px-3 py-2 text-sm">
                        <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Add User</button>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">User</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Email</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Role</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Joined</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>John Smith</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">john.smith@example.com</td>
                                <td class="py-3 px-4">User</td>
                                <td class="py-3 px-4">May 10, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Suspend</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Sarah Johnson</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">sarah.johnson@example.com</td>
                                <td class="py-3 px-4">Admin</td>
                                <td class="py-3 px-4">Apr 15, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Suspend</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Michael Brown</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">michael.brown@example.com</td>
                                <td class="py-3 px-4">User</td>
                                <td class="py-3 px-4">May 5, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-green-600 hover:text-green-800">Approve</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        content: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">Content Management</h1>
                <p class="text-gray-500">Manage educational content and resources</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">Content Library</h2>
                    <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Add New Content</button>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Title</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Type</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Author</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Published</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">Crypto Security Basics</div>
                                    <div class="text-sm text-gray-500">A beginner's guide to securing your crypto assets</div>
                                </td>
                                <td class="py-3 px-4">Guide</td>
                                <td class="py-3 px-4">Alex Chen</td>
                                <td class="py-3 px-4">May 15, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Published</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Unpublish</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">Crypto Tax Guide 2025</div>
                                    <div class="text-sm text-gray-500">Understanding cryptocurrency taxation</div>
                                </td>
                                <td class="py-3 px-4">Article</td>
                                <td class="py-3 px-4">Sarah Johnson</td>
                                <td class="py-3 px-4">May 10, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Published</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Unpublish</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">Blockchain Technology Explained</div>
                                    <div class="text-sm text-gray-500">How blockchain works and why it matters</div>
                                </td>
                                <td class="py-3 px-4">Article</td>
                                <td class="py-3 px-4">Michael Rodriguez</td>
                                <td class="py-3 px-4">May 5, 2025</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Draft</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-green-600 hover:text-green-800">Publish</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        quiz: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">Quiz Management</h1>
                <p class="text-gray-500">Manage quiz questions and matching algorithm</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">Quiz Questions</h2>
                    <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Add New Question</button>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Question</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Category</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Weight</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">What is your primary goal with cryptocurrency?</div>
                                    <div class="text-sm text-gray-500">Multiple choice question</div>
                                </td>
                                <td class="py-3 px-4">Goals</td>
                                <td class="py-3 px-4">High</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Disable</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">How would you rate your crypto knowledge?</div>
                                    <div class="text-sm text-gray-500">Scale question (1-5)</div>
                                </td>
                                <td class="py-3 px-4">Experience</td>
                                <td class="py-3 px-4">Medium</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Disable</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="font-medium">Which services are you most interested in?</div>
                                    <div class="text-sm text-gray-500">Multiple select question</div>
                                </td>
                                <td class="py-3 px-4">Services</td>
                                <td class="py-3 px-4">High</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">Edit</button>
                                        <button class="text-red-600 hover:text-red-800">Disable</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h2 class="text-lg font-bold mb-4">Matching Algorithm Settings</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Provider Match Threshold</label>
                        <input type="range" min="0" max="100" value="70" class="w-full">
                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Low Similarity (0%)</span>
                            <span>High Similarity (100%)</span>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Maximum Providers to Show</label>
                        <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            <option>3 providers</option>
                            <option selected>5 providers</option>
                            <option>10 providers</option>
                        </select>
                    </div>
                </div>
                <div class="mt-6">
                    <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Save Algorithm Settings</button>
                </div>
            </div>
        `,
        messages: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">Message Center</h1>
                <p class="text-gray-500">Manage user inquiries and support messages</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-bold">Recent Messages</h2>
                    <div class="flex space-x-2">
                        <select class="border rounded-md px-3 py-2 text-sm">
                            <option>All Messages</option>
                            <option>Unread</option>
                            <option>Flagged</option>
                            <option>Resolved</option>
                        </select>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-3 px-4 font-medium text-gray-500">From</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Received</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                                <th class="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b bg-blue-50">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>John Smith</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="font-medium">Question about provider verification</div>
                                    <div class="text-sm text-gray-500 truncate w-64">I'm wondering how you verify the credentials of service providers on your platform...</div>
                                </td>
                                <td class="py-3 px-4">10 minutes ago</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">New</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">View</button>
                                        <button class="text-green-600 hover:text-green-800">Reply</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Sarah Johnson</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="font-medium">Issue with quiz results</div>
                                    <div class="text-sm text-gray-500 truncate w-64">I completed the quiz but didn't receive my provider matches. Can you help?</div>
                                </td>
                                <td class="py-3 px-4">2 hours ago</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">In Progress</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">View</button>
                                        <button class="text-green-600 hover:text-green-800">Reply</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b">
                                <td class="py-3 px-4">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <span>Michael Brown</span>
                                    </div>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="font-medium">Thank you for your help</div>
                                    <div class="text-sm text-gray-500 truncate w-64">I wanted to thank you for connecting me with the perfect crypto tax specialist...</div>
                                </td>
                                <td class="py-3 px-4">Yesterday</td>
                                <td class="py-3 px-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Resolved</span>
                                </td>
                                <td class="py-3 px-4">
                                    <div class="flex space-x-2">
                                        <button class="text-blue-600 hover:text-blue-800">View</button>
                                        <button class="text-gray-600 hover:text-gray-800">Archive</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        settings: `
            <div class="mb-6">
                <h1 class="text-2xl font-bold">System Settings</h1>
                <p class="text-gray-500">Configure platform settings and preferences</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 class="text-lg font-bold mb-4">General Settings</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
                            <input type="text" value="CryptoMall" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                            <input type="email" value="contact@cryptomall.com" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Support Phone</label>
                            <input type="tel" value="+1 (555) 123-4567" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="maintenance-mode" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                            <label for="maintenance-mode" class="ml-2 block text-sm text-gray-700">Enable Maintenance Mode</label>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Save General Settings</button>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 class="text-lg font-bold mb-4">Email Settings</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">SMTP Server</label>
                            <input type="text" value="smtp.example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">SMTP Port</label>
                            <input type="number" value="587" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Sender Email</label>
                            <input type="email" value="noreply@cryptomall.com" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="email-notifications" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                            <label for="email-notifications" class="ml-2 block text-sm text-gray-700">Enable Email Notifications</label>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Save Email Settings</button>
                        <button class="ml-2 border border-primary text-primary px-4 py-2 rounded-md text-sm">Test Connection</button>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 class="text-lg font-bold mb-4">Security Settings</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Session Timeout (minutes)</label>
                            <input type="number" value="30" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Password Policy</label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option>Standard (8+ chars, 1 number)</option>
                                <option selected>Strong (8+ chars, upper/lower, number, symbol)</option>
                                <option>Very Strong (12+ chars, upper/lower, number, symbol)</option>
                            </select>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="two-factor" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                            <label for="two-factor" class="ml-2 block text-sm text-gray-700">Require Two-Factor Authentication for Admins</label>
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="login-attempts" checked class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                            <label for="login-attempts" class="ml-2 block text-sm text-gray-700">Limit Failed Login Attempts</label>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Save Security Settings</button>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 class="text-lg font-bold mb-4">Appearance Settings</h2>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                            <div class="flex items-center">
                                <input type="color" value="#6366f1" class="h-10 w-10 border-0 p-0">
                                <input type="text" value="#6366f1" class="ml-2 w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Default Theme</label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option selected>Light</option>
                                <option>Dark</option>
                                <option>System Default</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
                            <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                <option>Small</option>
                                <option selected>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button class="bg-primary text-white px-4 py-2 rounded-md text-sm">Save Appearance Settings</button>
                        <button class="ml-2 border border-primary text-primary px-4 py-2 rounded-md text-sm">Reset to Default</button>
                    </div>
                </div>
            </div>
        `
    };
    
    // Handle sidebar navigation
    if (sidebarLinks) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                sidebarLinks.forEach(l => {
                    l.classList.remove('bg-primary-light', 'text-primary', 'border-r-2', 'border-primary');
                    l.classList.add('text-gray-700', 'hover:bg-gray-100');
                });
                
                // Add active class to clicked link
                this.classList.add('bg-primary-light', 'text-primary', 'border-r-2', 'border-primary');
                this.classList.remove('text-gray-700', 'hover:bg-gray-100');
                
                // Get section from link text or data attribute
                const linkText = this.textContent.trim().toLowerCase();
                
                // Update main content based on selected section
                if (mainContent) {
                    if (linkText === 'dashboard' && dashboardContent.dashboard) {
                        mainContent.innerHTML = dashboardContent.dashboard;
                    } else if (linkText === 'providers' && dashboardContent.providers) {
                        mainContent.innerHTML = dashboardContent.providers;
                    } else if (linkText === 'users' && dashboardContent.users) {
                        mainContent.innerHTML = dashboardContent.users;
                    } else if (linkText === 'content' && dashboardContent.content) {
                        mainContent.innerHTML = dashboardContent.content;
                    } else if (linkText === 'quiz' && dashboardContent.quiz) {
                        mainContent.innerHTML = dashboardContent.quiz;
                    } else if (linkText === 'messages' && dashboardContent.messages) {
                        mainContent.innerHTML = dashboardContent.messages;
                    } else if (linkText === 'settings' && dashboardContent.settings) {
                        mainContent.innerHTML = dashboardContent.settings;
                    }
                }
            });
        });
    }
    
    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('open');
        });
    }
});
