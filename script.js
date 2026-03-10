// ==================== Authentication ==================== 

// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    const userDisplay = document.getElementById('userDisplay');
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (userDisplay) {
        if (isLoggedIn) {
            const userEmail = localStorage.getItem('userEmail');
            userDisplay.textContent = 'Welcome, ' + (userEmail ? userEmail.split('@')[0] : 'Cashier') + '!';
        }
    }
});

// Login Handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Demo Credentials
        const validEmail = 'cashier@orbit.com';
        const validPassword = 'orbit123';
        
        if (email === validEmail && password === validPassword) {
            // Store login info
            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('loginTime', new Date().toLocaleString());
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials!\n\nDemo: cashier@orbit.com / orbit123');
        }
    });
}

// Logout Function
function logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginTime');
    window.location.href = 'index.html';
}

// ==================== Navigation Active Link ==================== 
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// ==================== Dashboard Stats ==================== 
function updateDashboardStats() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    
    if (document.getElementById('totalProducts')) {
        document.getElementById('totalProducts').textContent = products.length;
    }
    if (document.getElementById('totalBills')) {
        document.getElementById('totalBills').textContent = bills.length;
    }
    
    let totalSales = 0;
    let totalDiscount = 0;
    
    bills.forEach(bill => {
        totalSales += bill.total || 0;
        totalDiscount += bill.discountAmount || 0;
    });
    
    if (document.getElementById('totalSales')) {
        document.getElementById('totalSales').textContent = '$' + totalSales.toFixed(2);
    }
    if (document.getElementById('avgDiscount')) {
        const avgDiscount = bills.length > 0 ? ((totalDiscount / bills.length) * 100) : 0;
        document.getElementById('avgDiscount').textContent = avgDiscount.toFixed(1) + '%';
    }
}

// ==================== Data Management ==================== 

// Initialize default products if none exist
function initializeDefaultProducts() {
    const existingProducts = localStorage.getItem('products');
    if (!existingProducts) {
        const defaultProducts = [
            {
                id: 1,
                name: 'Whole Milk',
                code: 'DAIRY001',
                price: 3.99,
                category: 'Dairy',
                quantity: 50,
                description: 'Fresh whole milk, 1 liter',
                dateAdded: new Date().toLocaleDateString()
            },
            {
                id: 2,
                name: 'Whole Wheat Bread',
                code: 'GRO001',
                price: 2.49,
                category: 'Groceries',
                quantity: 30,
                description: 'Fresh whole wheat bread',
                dateAdded: new Date().toLocaleDateString()
            },
            {
                id: 3,
                name: 'Orange Juice',
                code: 'BEV001',
                price: 4.99,
                category: 'Beverages',
                quantity: 25,
                description: 'Fresh orange juice, 500ml',
                dateAdded: new Date().toLocaleDateString()
            },
            {
                id: 4,
                name: 'Potato Chips',
                code: 'SNK001',
                price: 1.99,
                category: 'Snacks',
                quantity: 100,
                description: 'Crispy potato chips, 100g',
                dateAdded: new Date().toLocaleDateString()
            },
            {
                id: 5,
                name: 'Frozen Pizza',
                code: 'FRZ001',
                price: 8.99,
                category: 'Frozen',
                quantity: 20,
                description: 'Frozen cheese pizza, 12 inch',
                dateAdded: new Date().toLocaleDateString()
            }
        ];
        
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultProducts();
});

// ==================== Utility Functions ==================== 

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

// Format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Clear all data (for development/testing)
function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        localStorage.removeItem('products');
        localStorage.removeItem('bills');
        localStorage.removeItem('reviews');
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userEmail');
        alert('All data cleared!');
        window.location.href = 'index.html';
    }
}

// Export data (backup)
function exportData() {
    const data = {
        products: localStorage.getItem('products'),
        bills: localStorage.getItem('bills'),
        reviews: localStorage.getItem('reviews'),
        exportDate: new Date().toLocaleString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'orbitmarket-backup-' + Date.now() + '.json';
    link.click();
}

// ==================== Smooth Scrolling ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Toast Notification ==================== 
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== Keyboard Shortcuts ==================== 
document.addEventListener('keydown', function(e) {
    // Ctrl+L: Logout
    if (e.ctrlKey && e.key === 'l') {
        if (localStorage.getItem('userLoggedIn')) {
            logout();
        }
    }
    
    // Escape: Close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal[style*="display: block"]');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// ==================== Error Handling ==================== 
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    showToast('An error occurred. Please refresh the page.', 'error');
});

// ==================== Service Worker (Optional) ==================== 
if ('serviceWorker' in navigator) {
    // Uncomment if you have a service worker
    // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
}
