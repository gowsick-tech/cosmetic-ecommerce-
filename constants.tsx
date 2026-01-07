
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal 24K Serum',
    category: 'Skincare',
    price: 325,
    description: 'A molecular suspension of bio-available 24K gold and platinum peptides designed to reorganize dermal architecture at the cellular level.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=100&w=1200',
    rating: 5.0,
    ingredients: ['24K Ionic Gold', 'Platinum Matrix Peptides', 'Ultra-Low Dalton Hyaluronic'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Obsidian Velvet',
    category: 'Makeup',
    price: 85,
    description: 'The world\'s deepest matte black lipstick, engineered with carbon-capture pigment for an infinite atmospheric finish.',
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=100&w=1200',
    rating: 4.9,
    ingredients: ['Atmospheric Pigments', 'Madagascan Vanilla', 'Shea Polymer']
  },
  {
    id: '3',
    name: 'Noir Nectar Perfume',
    category: 'Fragrance',
    price: 450,
    description: 'A nocturnal symphony of black orchid, cold-pressed oud, and metallic ozone. Encased in hand-blown obsidian glass.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=100&w=1200',
    rating: 4.8,
    isNew: true
  },
  {
    id: '4',
    name: 'Horizon Azure Palette',
    category: 'Makeup',
    price: 195,
    description: '14 refractive shades developed using mineral diffraction technology to mimic the shifting lights of the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=100&w=1200',
    rating: 4.7
  },
  {
    id: '5',
    name: 'The Alchemist Mist',
    category: 'Skincare',
    price: 95,
    description: 'A biological shielding mist that creates an invisible neural-linked barrier against urban toxicity and blue-light stress.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=100&w=1200',
    rating: 5.0,
    isBestseller: true
  },
  {
    id: '6',
    name: 'Neural Recovery Balm',
    category: 'Skincare',
    price: 280,
    description: 'A deep-cycle recovery cream that synchronizes with your circadian rhythm using AI-optimized bio-lipids.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=100&w=1200',
    rating: 4.9
  }
];

export const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Fragrance'];
