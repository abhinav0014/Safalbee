import { Product, User } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = {
  // Products
  async getProducts(category?: string): Promise<Product[]> {
    const url = category 
      ? `${API_BASE_URL}/api/v1/products?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/api/v1/products`;
    
    const response = await fetch(url, {
      credentials: 'include',
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return response.json();
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/${id}`, {
      credentials: 'include',
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    return response.json();
  },

  // Authentication
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
        credentials: 'include',
        cache: 'no-store',
      });
      
      if (!response.ok) {
        return null;
      }
      
      return response.json();
    } catch (error) {
      return null;
    }
  },

  async logout(): Promise<void> {
    await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  },

  // Auth URLs
  getLoginUrl(): string {
    return `${API_BASE_URL}/ui/auth/login`;
  },

  getRegisterUrl(): string {
    return `${API_BASE_URL}/ui/auth/register`;
  },

  getLogoutUrl(): string {
    return `${API_BASE_URL}/ui/auth/logout`;
  },
};