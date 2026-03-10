# OrbitMarket - Supermarket Management System

A professional, dark-themed web application for managing supermarket operations, including inventory management, billing, invoice generation with PDF export, discounts, and customer reviews.

## 🌟 Features

### 1. **Home Page (index.html)**
- Attractive landing page with professional design
- Feature showcase with emoji icons
- Call-to-action buttons for easy navigation
- Responsive design matching the dark theme

### 2. **Shop Page (shop.html)** - NEW
- Browse all available products
- Filter by product categories (Dairy, Groceries, Beverages, Snacks, etc.)
- Price range filter
- Sort by popularity, newest, price, or name
- Search products by name, code, or category
- Product detail cards with stock status
- Compare feature for quick product comparison

### 3. **Special Offers (offers.html)** - NEW
- Featured deals with discount badges
- Active promo codes with copy-to-clipboard functionality
- Weekly special promotions
- Loyalty program information
- Exclusive member-only benefits
- Countdown timers for limited offers

### 4. **About Us (about.html)** - NEW
- Company history and story
- Mission and vision statements
- Why choose OrbitMarket section
- Meet the team profiles
- Statistics (customers, products, locations, ratings)
- Core values (Integrity, Quality, Innovation, etc.)
- Customer testimonials area

### 5. **Help & FAQ (help.html)** - NEW
- Comprehensive FAQ section organized by category:
  - Account & Login
  - Products & Shopping
  - Orders & Delivery
  - Payments & Billing
  - Returns & Refunds
  - General Questions
- Quick help categories
- Live support contact options
- Interactive accordion for FAQs

### 6. **Contact Us (contact.html)** - NEW
- Contact form with validation
- Multiple contact methods:
  - Email support
  - Phone numbers for different departments
  - Live chat option
  - Physical store address
- Department-wise contact information
- Social media links
- Operating hours and response times

### 7. **Cashier Login (login.html)**
- Secure authentication system
- Demo credentials for testing
- Clean, modern login form design
- Remember me functionality

**Demo Credentials:**
- Email: `cashier@orbit.com`
- Password: `orbit123`

### 8. **Dashboard (dashboard.html)**
- Overview of system statistics
- Total products, sales, discounts, and bills
- Quick action buttons
- Recent products display
- Accessible only after login

### 9. **Product Management (products.html)**
- Add new products with details:
  - Product name and code
  - Price and category
  - Quantity and description
- Edit existing products
- Delete products
- Search functionality
- Complete product listing in table format

**Product Categories:**
- Dairy
- Groceries
- Beverages
- Snacks
- Frozen Foods
- Personal Care
- Household Items
- Other

### 10. **Point of Sale / Checkout (checkout.html)**
- Browse and select products
- Add items to shopping cart
- Adjust quantities
- Real-time price calculation
- **Discount Management:**
  - Apply percentage-based discounts
  - Automatic discount amount calculation
- **Invoice Generation:**
  - Professional invoice design
  - PDF download functionality
  - Invoice printing support
  - Automatic bill storage
  - Includes:
    - Invoice number and date/time
    - Product details with quantities
    - Subtotal, discount, tax (10%), and total
    - Company information

### 11. **Customer Reviews & Feedback (reviews.html)**
- Emoji-based rating system:
  - 😢 Very Bad (1 star)
  - 😕 Bad (2 stars)
  - 😐 Okay (3 stars)
  - 🙂 Good (4 stars)
  - 😍 Excellent (5 stars)
- Multi-select feedback categories
- Review filtering by rating
- Average rating calculation
- Customer profile information

## 🎨 Design Features

### Theme
- **Color Scheme:**
  - Primary Dark: `#0a0e27`
  - Accent Gold: `#d4af37`
  - Text Light: `#ffffff`
  - Soothing and professional appearance

- **Components:**
  - Responsive navigation bar with logo
  - Sidebar dashboard for easy navigation
  - Card-based layouts
  - Professional tables for data display
  - Modern form elements
  - Smooth transitions and hover effects

### Dark Soothing Theme
- Easy on the eyes with dark background
- Golden accents for important elements
- Clear visual hierarchy
- Professional appearance
- Accessible color contrasts

## 📱 Responsive Design

- Works seamlessly on desktop, tablet, and mobile devices
- Responsive navigation and layout
- Touch-friendly buttons and inputs
- Mobile-optimized tables

## 💾 Data Management

**LocalStorage Architecture:**
- `products`: Stores all product information
- `bills`: Stores all generated invoices
- `reviews`: Stores customer feedback
- `userLoggedIn`: Session management
- `userEmail`: User information

### Default Sample Data
The system includes 5 pre-loaded products for demonstration:
1. Whole Milk - $3.99
2. Whole Wheat Bread - $2.49
3. Orange Juice - $4.99
4. Potato Chips - $1.99
5. Frozen Pizza - $8.99

## 🔧 Usage Instructions

### Step 1: Access the Application
1. Open `index.html` in a web browser
2. Navigate to the Login page

### Step 2: Login
1. Click "Get Started" or "Login" button
2. Enter demo credentials:
   - Email: `cashier@orbit.com`
   - Password: `orbit123`
3. Click "Login"

### Step 3: Manage Products
1. Go to "Manage Products" from sidebar
2. Add new products with name, price, category, quantity
3. View all products in the table
4. Edit or delete products as needed

### Step 4: Create Bills
1. Go to "New Bill" from sidebar
2. Search and select products
3. Adjust quantities for items
4. Apply discount percentage if needed
5. Review the summary (subtotal, discount, tax, total)
6. Click "Generate Invoice"
7. Download as PDF or print

### Step 5: Leave Reviews
1. Click "Reviews" in navigation
2. Fill in customer information
3. Select emoji rating
4. Select what you liked (optional)
5. Write review title and feedback
6. Submit review
7. View all reviews with filter by rating

## 📄 API & Functions

### Key JavaScript Functions

#### Authentication
- `logout()` - Logout current user
- `setActiveNav()` - Highlight active navigation

#### Dashboard
- `updateDashboardStats()` - Update statistics display
- `displayRecentProducts()` - Show recent products

#### Products
- `loadProducts()` - Load all products
- `addToCart()` - Add product to cart
- `openEditModal()` - Open edit dialog
- `deleteProduct()` - Remove product
- `updateQuantity()` - Change item quantity

#### Checkout
- `generateInvoice()` - Create invoice
- `updateCart()` - Refresh cart display
- `updateSummary()` - Calculate totals

#### Reviews
- `loadReviews()` - Display all reviews
- `updateStats()` - Calculate averages

#### Utilities
- `formatCurrency()` - Format numbers as currency
- `formatDate()` - Format dates
- `clearAllData()` - Reset all data
- `exportData()` - Backup data as JSON

## 🔒 Security Notes

- Used demo credentials for development/testing
- LocalStorage used for client-side data storage
- For production, implement:
  - Backend authentication (Node.js, Python, etc.)
  - Secure database (MongoDB, PostgreSQL, etc.)
  - Password hashing (bcrypt, argon2)
  - HTTPS encryption
  - Server-side validation

## 📦 Dependencies

- **html2pdf.js** - For PDF generation
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js`


## 📝 File Structure

```
OrbitSupermarket/
├── index.html           # Landing page
├── shop.html            # Product browsing & shopping
├── offers.html          # Special deals & promotions
├── about.html           # Company information
├── help.html            # FAQs & Support
├── contact.html         # Contact form & support channels
├── reviews.html         # Customer reviews & feedback
├── login.html           # Cashier login
├── dashboard.html       # Dashboard overview
├── products.html        # Product management
├── checkout.html        # POS and invoice
├── styles.css          # Dark theme styling
├── script.js           # Core functionality
└── README.md          # This file
```

## 📊 Sample Workflows

### Customer Shopping Journey
1. **Home** → Explore OrbitMarket features
2. **Shop** → Browse products, filter by category, price, or search
3. **About Us** → Learn about the company and team
4. **Special Offers** → View deals and copy promo codes
5. **Help** → Access comprehensive FAQs
6. **Contact Us** → Get support or submit feedback
7. **Reviews** → Leave a 5-star emoji review with likes

### Cashier Operations
1. **Home** → View landing page
2. **Login** → Access cashier portal with demo credentials
3. **Dashboard** → See overview of operations and statistics
4. **Manage Products** → Add/Edit/Delete products (Milk $3.99, Bread $2.49, Juice $4.99)
5. **New Bill/Checkout** → 
   - Browse and add items to cart
   - Adjust quantities and remove items
   - Apply percentage-based discount
   - Generate professional invoice
   - Download invoice as PDF
   - Print invoice
   - System stores bill automatically

### Customer Support Journey
1. **Help Center** → Browse FAQs by category
   - Account & Login
   - Products & Shopping
   - Orders & Delivery
   - Payments & Billing
   - Returns & Refunds
   - General Questions
2. **Contact Us** → Submit contact form or call support
3. **About Us** → Learn company values and team
4. **Special Offers** → Check loyalty program benefits

## 🎯 Key Features Highlighted

- **6 New Customer Pages**: Shop, Offers, About, Help, Contact, Reviews
- **Professional Dashboard**: Analytics and quick actions
- **Complete Inventory System**: Add, edit, delete products with categories
- **Point of Sale**: Full checkout with discounts
- **Invoice Management**: PDF generation and printing
- **Customer Reviews**: Emoji-based rating system
- **Promo Codes**: Copy-to-clipboard functionality
- **Responsive Design**: Works on all devices
- **Dark Theme**: Professional, soothing interface

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Future Enhancements

- User authentication with backend
- Database integration
- Real-time inventory tracking
- Sales analytics dashboard
- Multiple user roles (Admin, Manager, Cashier)
- Receipt email functionality
- Customer loyalty program
- Barcode scanning
- Multi-language support
- Dark/Light theme toggle

## 📞 Support

For issues or questions:
1. Check browser console for errors (F12)
2. Verify demo credentials
3. Clear LocalStorage if needed: `localStorage.clear()`
4. Reload page and try again

## 📄 License

OrbitMarket © 2025. All rights reserved.

---

**Thank you for using OrbitMarket!**
Making supermarket management simple and efficient.
