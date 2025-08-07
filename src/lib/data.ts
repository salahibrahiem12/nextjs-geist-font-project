import { Product } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: {
      en: 'Premium Dates - Medjool',
      ar: 'تمر مجهول فاخر'
    },
    description: {
      en: 'Premium quality Medjool dates from Saudi Arabia. Sweet, soft, and naturally delicious.',
      ar: 'تمر مجهول عالي الجودة من المملكة العربية السعودية. حلو وطري ولذيذ طبيعياً.'
    },
    price: {
      EGP: 250,
      AED: 35,
      SAR: 40,
      KWD: 8
    },
    originalPrice: {
      EGP: 300,
      AED: 42,
      SAR: 48,
      KWD: 10
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Food & Beverages',
      ar: 'الأطعمة والمشروبات'
    },
    inStock: true,
    stockQuantity: 50,
    rating: 4.8,
    reviews: 124,
    tags: ['halal', 'organic', 'premium'],
    isHalal: true,
    isFeatured: true
  },
  {
    id: '2',
    name: {
      en: 'Traditional Arabic Coffee Set',
      ar: 'طقم قهوة عربية تقليدية'
    },
    description: {
      en: 'Beautiful traditional Arabic coffee set with dallah pot and cups. Perfect for serving guests.',
      ar: 'طقم قهوة عربية تقليدية جميل مع دلة وأكواب. مثالي لتقديم الضيوف.'
    },
    price: {
      EGP: 850,
      AED: 120,
      SAR: 135,
      KWD: 28
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Home & Kitchen',
      ar: 'المنزل والمطبخ'
    },
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviews: 89,
    tags: ['traditional', 'handmade', 'gift'],
    isFeatured: true
  },
  {
    id: '3',
    name: {
      en: 'Elegant Abaya - Black',
      ar: 'عباءة أنيقة - سوداء'
    },
    description: {
      en: 'Elegant black abaya made from premium fabric. Comfortable and stylish for everyday wear.',
      ar: 'عباءة سوداء أنيقة مصنوعة من قماش فاخر. مريحة وأنيقة للارتداء اليومي.'
    },
    price: {
      EGP: 450,
      AED: 65,
      SAR: 75,
      KWD: 15
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Fashion',
      ar: 'الأزياء'
    },
    inStock: true,
    stockQuantity: 30,
    rating: 4.7,
    reviews: 156,
    tags: ['modest', 'elegant', 'comfortable'],
    isFeatured: false
  },
  {
    id: '4',
    name: {
      en: 'Oud Perfume - Royal Collection',
      ar: 'عطر عود - المجموعة الملكية'
    },
    description: {
      en: 'Luxurious oud perfume from the Royal Collection. Long-lasting fragrance with rich, woody notes.',
      ar: 'عطر عود فاخر من المجموعة الملكية. عطر طويل الأمد بنفحات خشبية غنية.'
    },
    price: {
      EGP: 1200,
      AED: 170,
      SAR: 190,
      KWD: 40
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Beauty & Personal Care',
      ar: 'الجمال والعناية الشخصية'
    },
    inStock: true,
    stockQuantity: 15,
    rating: 4.9,
    reviews: 78,
    tags: ['luxury', 'oud', 'long-lasting'],
    isFeatured: true
  },
  {
    id: '5',
    name: {
      en: 'Prayer Mat - Velvet',
      ar: 'سجادة صلاة - مخمل'
    },
    description: {
      en: 'Soft velvet prayer mat with beautiful Islamic patterns. Comfortable and durable.',
      ar: 'سجادة صلاة مخملية ناعمة بنقوش إسلامية جميلة. مريحة ومتينة.'
    },
    price: {
      EGP: 180,
      AED: 25,
      SAR: 30,
      KWD: 6
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Religious Items',
      ar: 'المواد الدينية'
    },
    inStock: true,
    stockQuantity: 40,
    rating: 4.5,
    reviews: 203,
    tags: ['prayer', 'islamic', 'comfortable'],
    isFeatured: false
  },
  {
    id: '6',
    name: {
      en: 'Ramadan Lantern - LED',
      ar: 'فانوس رمضان - LED'
    },
    description: {
      en: 'Beautiful LED Ramadan lantern with traditional design. Battery operated with warm light.',
      ar: 'فانوس رمضان LED جميل بتصميم تقليدي. يعمل بالبطارية مع إضاءة دافئة.'
    },
    price: {
      EGP: 320,
      AED: 45,
      SAR: 52,
      KWD: 11
    },
    images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
    category: {
      en: 'Seasonal Items',
      ar: 'المواد الموسمية'
    },
    inStock: true,
    stockQuantity: 35,
    rating: 4.4,
    reviews: 92,
    tags: ['ramadan', 'decoration', 'led'],
    isFeatured: false
  }
];

export const categories = [
  { en: 'All Categories', ar: 'جميع الفئات' },
  { en: 'Food & Beverages', ar: 'الأطعمة والمشروبات' },
  { en: 'Fashion', ar: 'الأزياء' },
  { en: 'Home & Kitchen', ar: 'المنزل والمطبخ' },
  { en: 'Beauty & Personal Care', ar: 'الجمال والعناية الشخصية' },
  { en: 'Religious Items', ar: 'المواد الدينية' },
  { en: 'Seasonal Items', ar: 'المواد الموسمية' }
];

export const currencies = {
  EGP: { symbol: 'ج.م', name: { en: 'Egyptian Pound', ar: 'الجنيه المصري' } },
  AED: { symbol: 'د.إ', name: { en: 'UAE Dirham', ar: 'الدرهم الإماراتي' } },
  SAR: { symbol: 'ر.س', name: { en: 'Saudi Riyal', ar: 'الريال السعودي' } },
  KWD: { symbol: 'د.ك', name: { en: 'Kuwaiti Dinar', ar: 'الدينار الكويتي' } }
};

export const paymentMethods = [
  {
    id: 'fawry',
    name: { en: 'Fawry', ar: 'فوري' },
    description: { en: 'Pay through Fawry network', ar: 'ادفع من خلال شبكة فوري' },
    countries: ['EG']
  },
  {
    id: 'cashu',
    name: { en: 'CashU', ar: 'كاش يو' },
    description: { en: 'Online payment with CashU', ar: 'الدفع الإلكتروني بكاش يو' },
    countries: ['AE', 'SA', 'KW']
  },
  {
    id: 'card',
    name: { en: 'Credit/Debit Card', ar: 'بطاقة ائتمان/خصم' },
    description: { en: 'Pay with your card', ar: 'ادفع ببطاقتك' },
    countries: ['EG', 'AE', 'SA', 'KW']
  },
  {
    id: 'cod',
    name: { en: 'Cash on Delivery', ar: 'الدفع عند الاستلام' },
    description: { en: 'Pay when you receive', ar: 'ادفع عند الاستلام' },
    countries: ['EG', 'AE', 'SA', 'KW']
  }
];
