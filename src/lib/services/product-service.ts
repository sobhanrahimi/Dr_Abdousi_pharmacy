import { Product, Category, PharmacyService, FAQItem, PharmacyInfo } from '@/types/pharmacy';
import {
  mockProducts,
  mockCategories,
  mockServices,
  mockFaqs,
  mockPharmacyInfo,
} from '@/lib/data/mock-data';

export interface GetProductsOptions {
  categoryId?: string;
  searchQuery?: string;
  sortBy?: 'featured' | 'price_asc' | 'price_desc' | 'name';
  featuredOnly?: boolean;
}

/**
 * Data repository layer.
 * Currently serves data from local mock models.
 * Designed so that future Supabase queries can be substituted cleanly without breaking components.
 */
export async function getProducts(options?: GetProductsOptions): Promise<Product[]> {
  // Simulate async delay for realistic UI loading states
  await new Promise((resolve) => setTimeout(resolve, 50));

  let result = [...mockProducts];

  if (options?.featuredOnly) {
    result = result.filter((p) => p.isFeatured);
  }

  if (options?.categoryId && options.categoryId !== 'all') {
    result = result.filter((p) => p.categoryId === options.categoryId);
  }

  if (options?.searchQuery && options.searchQuery.trim() !== '') {
    const query = options.searchQuery.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.englishName && p.englishName.toLowerCase().includes(query)) ||
        p.summary.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.tags?.some((t) => t.toLowerCase().includes(query))
    );
  }

  if (options?.sortBy) {
    switch (options.sortBy) {
      case 'price_asc':
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price_desc':
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name, 'fa'));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }
  }

  return result;
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  const product = mockProducts.find((p) => p.id === id || p.slug === id);
  return product || null;
}

export async function getCategories(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 20));
  return mockCategories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  await new Promise((resolve) => setTimeout(resolve, 20));
  const category = mockCategories.find((c) => c.slug === slug || c.id === slug);
  return category || null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const products = await getProducts({ featuredOnly: true });
  return products.slice(0, limit);
}

export async function getPharmacyServices(): Promise<PharmacyService[]> {
  return mockServices;
}

export async function getFaqs(): Promise<FAQItem[]> {
  return mockFaqs;
}

export async function getPharmacyInfo(): Promise<PharmacyInfo> {
  return mockPharmacyInfo;
}
