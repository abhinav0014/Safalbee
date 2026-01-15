# 🍯 Honey Hive - Premium Frontend

A vibrant, energetic Next.js frontend for a honey e-commerce platform featuring bold gradients, animations, and a premium user experience.

## ✨ Features

- 🎨 **Vivid Design** - Warm honey colors, gradients, and animations
- 🌓 **Dark Mode** - Beautiful dark theme with smooth transitions
- 🛒 **Shopping Cart** - Local storage with real-time updates
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast Performance** - Next.js App Router with optimizations
- 🔐 **Backend Auth** - Seamless integration with FastAPI backend
- 🎭 **Rich Animations** - Floating elements, hover effects, transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running on port 8000

### Installation

1. **Navigate to frontend directory**

```bash
cd frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment**

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. **Run development server**

```bash
npm run dev
```

Visit `http://localhost:3000` 🎉

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with navbar & footer
│   ├── page.tsx            # Home page with hero & featured products
│   ├── products/
│   │   ├── page.tsx        # All products grid
│   │   └── [id]/page.tsx   # Product detail page
│   ├── cart/page.tsx       # Shopping cart
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navbar.tsx          # Sticky gradient navbar
│   ├── HeroSection.tsx     # Animated hero with floating elements
│   ├── ProductCard.tsx     # Product card with hover effects
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── Footer.tsx          # Rich footer with links
├── lib/
│   ├── api.ts              # API client for backend
│   ├── cart.ts             # Shopping cart logic
│   └── types.ts            # TypeScript interfaces
└── tailwind.config.js      # Tailwind with custom animations
```

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary: Amber/Gold (`amber-400`)
- Secondary: Emerald (`emerald-500`)
- Accent: Orange (`orange-500`)
- Background: Honey Cream (`amber-50`)

**Dark Mode:**
- Primary: Deep Honey (`amber-500`)
- Secondary: Neon Green (`lime-400`)
- Accent: Warm Orange (`orange-400`)
- Background: Dark Hive (`zinc-950`)

### Animations

- `float` - Floating elements (3s ease-in-out)
- `glow` - Glowing effect (2s alternate)
- `slide-up` - Slide up on entry (0.5s)
- `bounce-slow` - Slow bounce (3s)
- `gradient-shift` - Animated gradients

### Typography

- Headings: Bold, large, gradient text
- Body: Inter font, readable sizes
- Accent: Amber/Orange gradients

## 🔌 Backend Integration

### API Endpoints Used

```typescript
// Products
GET /api/v1/products          // Get all products
GET /api/v1/products/{id}     // Get single product

// Authentication
GET /api/v1/auth/me           // Get current user
POST /api/v1/auth/logout      // Logout
GET /ui/auth/login            // Login page (backend)
GET /ui/auth/register         // Register page (backend)
```

### Authentication Flow

1. User clicks "Login" → redirected to backend auth UI
2. Backend sets HTTP-only cookie on success
3. Backend redirects back to frontend
4. Frontend reads auth state from cookie via API

### CORS Configuration

Backend must allow:
```
http://localhost:3000
```

And enable credentials:
```python
allow_credentials=True
```

## 🛒 Shopping Cart

Cart is stored in `localStorage`:

```typescript
// Add item
cart.addItem(product, quantity);

// Update quantity
cart.updateQuantity(productId, newQuantity);

// Remove item
cart.removeItem(productId);

// Get total
const total = cart.getTotal();
```

Cart updates trigger `cartChange` event for live UI updates.

## 🌓 Dark Mode

Toggle using the sun/moon button in navbar.

Preference stored in `localStorage`:
```typescript
localStorage.getItem('theme') // 'light' | 'dark'
```

Uses Tailwind's `class` strategy with smooth transitions.

## 📱 Pages

### Home (`/`)
- Animated hero section with floating bees
- Feature strip (4 benefit cards)
- Featured products grid
- Story section with beekeeping image
- Full-width gradients and patterns

### Products (`/products`)
- Complete product catalog
- Loading skeletons
- Decorative floating elements
- Category filtering ready
- Pagination ready

### Product Detail (`/products/[id]`)
- Large image gallery
- Star ratings
- Quantity selector
- Add to cart with success animation
- Benefit icons
- Stock status

### Cart (`/cart`)
- Line items with images
- Quantity controls (+/-)
- Remove items
- Order summary sticky sidebar
- Trust badges
- Empty state

## 🎭 Key Components

### ProductCard
- Gradient borders
- Hover scale & shadow
- Floating "Add to Cart" animation
- Stock badges
- Category tags

### Navbar
- Sticky with scroll effect
- Gradient background that intensifies
- Mobile slide-out menu
- Cart counter badge
- Theme toggle

### HeroSection
- Full-screen gradient background
- Hexagon pattern overlay
- Floating decorative elements (bees, flowers)
- Large emoji illustration
- Dual CTAs with hover effects

### Footer
- Multi-column layout
- Social media icons
- Contact information
- Newsletter signup area
- Decorative elements

## 🚀 Performance

- Server components where possible
- Lazy loading images
- Optimized animations (GPU-accelerated)
- Minimal JavaScript
- Code splitting

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Export static site (if applicable)
npm run export
```

### Deployment Options

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** (with Node.js)

### Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
extend: {
  colors: {
    honey: {
      // Your custom palette
    }
  }
}
```

### Add Animations

In `globals.css`:

```css
@keyframes your-animation {
  /* keyframes */
}

.your-class {
  animation: your-animation 2s ease-in-out;
}
```

### Modify Layout

Edit `app/layout.tsx` for global structure.

## 🐛 Troubleshooting

### CORS Errors
Ensure backend has:
```python
allow_origins=["http://localhost:3000"]
allow_credentials=True
```

### Cart Not Updating
Check localStorage permissions in browser.

### Images Not Loading
Verify `image_url` field in product data.

### Dark Mode Not Working
Clear localStorage and refresh:
```javascript
localStorage.removeItem('theme')
```

## 📄 License

MIT

---

Built with 💛 for honey lovers everywhere