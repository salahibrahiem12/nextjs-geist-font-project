export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: {
    EGP: number;
    AED: number;
    SAR: number;
    KWD: number;
  };
  originalPrice?: {
    EGP: number;
    AED: number;
    SAR: number;
    KWD: number;
  };
  images: string[];
  category: {
    en: string;
    ar: string;
  };
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviews: number;
  tags: string[];
  isHalal?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  preferredLanguage: 'en' | 'ar';
  preferredCurrency: 'EGP' | 'AED' | 'SAR' | 'KWD';
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  currency: 'EGP' | 'AED' | 'SAR' | 'KWD';
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'fawry' | 'cashu' | 'card' | 'cod';
  shippingAddress: User['address'];
  createdAt: Date;
  estimatedDelivery: Date;
}

export type Language = 'en' | 'ar';
export type Currency = 'EGP' | 'AED' | 'SAR' | 'KWD';

export interface AppContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
}
