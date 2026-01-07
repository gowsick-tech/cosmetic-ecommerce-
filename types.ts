
export interface Product {
  id: string;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Fragrance';
  price: number;
  description: string;
  image: string;
  rating: number;
  ingredients?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SkinProfile {
  type: string;
  concerns: string[];
  sensitivity: 'Low' | 'Medium' | 'High';
}
