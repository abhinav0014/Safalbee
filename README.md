# 🍯 Honey Industry Backend API

A production-ready FastAPI backend for a honey industry e-commerce platform with authentication, product management, and SQLite database.

## ✨ Features

- 🔐 **Cookie-based Authentication** - Secure HTTP-only cookies with JWT
- 🍯 **Product Management** - Full CRUD API for honey products
- 🎨 **Backend-rendered Auth UI** - Jinja2 templates for login/register
- 🗄️ **SQLite Database** - Async SQLAlchemy with development database
- 📦 **Clean Architecture** - Modular, scalable structure
- 🔒 **Security First** - Password hashing, secure cookies, CORS configured

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- pip

### Installation

1. **Clone and navigate to the backend directory**

```bash
cd backend
```

2. **Create virtual environment**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Configure environment**

```bash
cp .env.example .env
```

Edit `.env` and set your `SECRET_KEY`:

```env
SECRET_KEY=your-super-secret-key-min-32-characters-long
```

5. **Initialize database with sample data**

```bash
python scripts/init_db.py
```

6. **Run the server**

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

## 📚 API Documentation

Once running, visit:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🔑 Authentication Flow

### 1. Register (UI)
Visit: `http://localhost:8000/ui/auth/register`

### 2. Login (UI)
Visit: `http://localhost:8000/ui/auth/login`

### 3. API Login (JSON)

```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'
```

### 4. Get Current User

```bash
curl http://localhost:8000/api/v1/auth/me \
  --cookie "honey_session=YOUR_TOKEN"
```

## 🍯 Products API

### Get All Products

```bash
curl http://localhost:8000/api/v1/products
```

### Get Product by ID

```bash
curl http://localhost:8000/api/v1/products/1
```

### Filter by Category

```bash
curl "http://localhost:8000/api/v1/products?category=Raw%20Honey"
```

### Create Product

```bash
curl -X POST http://localhost:8000/api/v1/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Lavender Honey",
    "description": "Aromatic honey from lavender fields",
    "price": 16.99,
    "stock": 30,
    "category": "Raw Honey"
  }'
```

## 📁 Project Structure

```
backend/
├── app/
│   ├── main.py                 # FastAPI application entry point
│   ├── core/
│   │   ├── config.py          # Environment configuration
│   │   ├── security.py        # JWT & password hashing
│   │   └── dependencies.py    # Auth dependencies
│   ├── db/
│   │   ├── base.py           # SQLAlchemy base models
│   │   ├── session.py        # Database session management
│   │   └── models/
│   │       ├── user.py       # User model
│   │       └── product.py    # Product model
│   ├── api/
│   │   └── v1/
│   │       ├── auth.py       # Authentication endpoints
│   │       └── products.py   # Product endpoints
│   ├── ui/
│   │   ├── auth/
│   │   │   └── routes.py     # UI auth routes
│   │   └── templates/
│   │       ├── base.html     # Base template
│   │       ├── login.html    # Login page
│   │       └── register.html # Registration page
│   ├── services/
│   │   ├── auth_service.py   # Authentication business logic
│   │   └── product_service.py # Product business logic
│   └── utils/
│       └── cookies.py        # Cookie utilities
├── scripts/
│   └── init_db.py           # Database initialization
├── static/                  # Static files (future)
├── requirements.txt
├── .env.example
└── README.md
```

## 🔒 Security Features

- **Password Hashing**: Bcrypt via Passlib
- **JWT Tokens**: Signed with HS256 algorithm
- **HTTP-Only Cookies**: Prevents XSS attacks
- **Secure Flag**: Configurable for HTTPS
- **CORS**: Configured for specific origins
- **Token Expiration**: 30-day default (configurable)

## 🗄️ Database Models

### User
- `id`: Integer (Primary Key)
- `email`: String (Unique, Indexed)
- `hashed_password`: String
- `full_name`: String (Optional)
- `is_active`: Boolean
- `created_at`: DateTime
- `updated_at`: DateTime

### Product
- `id`: Integer (Primary Key)
- `name`: String (Indexed)
- `description`: Text
- `price`: Float
- `stock`: Integer
- `image_url`: String (Optional)
- `category`: String (Indexed)
- `created_at`: DateTime
- `updated_at`: DateTime

## 🧪 Sample Products

The initialization script creates 8 sample products:

1. Wildflower Honey - $12.99
2. Manuka Honey - $49.99
3. Acacia Honey - $15.99
4. Buckwheat Honey - $13.99
5. Honeycomb - $24.99
6. Creamed Honey - $11.99
7. Orange Blossom Honey - $14.99
8. Honey Gift Set - $39.99

## 🔌 Frontend Integration

The backend is ready for Next.js frontend integration:

1. **CORS is configured** for `http://localhost:3000`
2. **Cookies work cross-origin** with credentials
3. **After login/register**, users are redirected to `FRONTEND_URL`
4. **Products API** returns JSON suitable for frontend consumption

### Frontend Setup Example

```javascript
// Fetch products in Next.js
const response = await fetch('http://localhost:8000/api/v1/products', {
  credentials: 'include' // Important for cookies
});
const products = await response.json();

// Check authentication
const userResponse = await fetch('http://localhost:8000/api/v1/auth/me', {
  credentials: 'include'
});
const user = userResponse.ok ? await userResponse.json() : null;
```

## 🛣️ API Endpoints

### Authentication
- `POST /api/v1/auth/login` - Login with email/password
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/logout` - Logout (clear cookie)
- `GET /api/v1/auth/me` - Get current user

### UI Authentication
- `GET /ui/auth/login` - Login page
- `POST /ui/auth/login` - Process login
- `GET /ui/auth/register` - Registration page
- `POST /ui/auth/register` - Process registration
- `GET /ui/auth/logout` - Logout

### Products
- `GET /api/v1/products` - List all products (with pagination & filtering)
- `GET /api/v1/products/{id}` - Get single product
- `POST /api/v1/products` - Create product

### System
- `GET /` - API information
- `GET /health` - Health check

## 🎯 Next Steps

This backend is ready for:

1. ✅ Frontend integration (Next.js)
2. ✅ User authentication flows
3. ✅ Product catalog display
4. ⏳ Payment gateway integration (Phase 2)
5. ⏳ Order management (Phase 2)
6. ⏳ Admin dashboard (Phase 2)
7. ⏳ Production database migration (PostgreSQL)

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SECRET_KEY` | JWT signing key | **Required** |
| `DATABASE_URL` | Database connection string | `sqlite+aiosqlite:///./dev.db` |
| `FRONTEND_URL` | Frontend URL for redirects | `http://localhost:3000` |
| `ALLOWED_ORIGINS` | CORS allowed origins | `http://localhost:3000,http://localhost:3001` |
| `COOKIE_SECURE` | Use secure cookies (HTTPS) | `False` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Token expiration time | `43200` (30 days) |

## 🐛 Troubleshooting

### Database locked error
If you get "database is locked" errors, ensure only one process is accessing the database at a time. SQLite doesn't handle high concurrency well - for production, migrate to PostgreSQL.

### CORS errors
Make sure your frontend URL is in `ALLOWED_ORIGINS` and you're sending requests with `credentials: 'include'`.

### Cookie not set
Verify `COOKIE_DOMAIN` is correct. For localhost, it should be `localhost` (no port).

## 📄 License

MIT

---

Built with ❤️ for the Honey Industry