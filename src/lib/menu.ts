import raw from '../data/menu.json';

export interface Variant { label?: string; price: number; veg: boolean }
export interface MenuItem { name: string; desc?: string; bestSeller: boolean; variants: Variant[] }
export interface MenuCategory { category: string; slug: string; note?: string; items: MenuItem[] }

type RawItem = {
  name: string; desc?: string; bestSeller?: boolean; veg?: boolean; price?: number;
  variants?: { label?: string; price: number; veg?: boolean }[];
};
type RawCategory = { category: string; sectionDesc?: string; items: RawItem[] };

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/** Menu with every item flattened to a list of priced variants. */
export const MENU: MenuCategory[] = (raw as RawCategory[]).map((c) => ({
  category: c.category,
  slug: slugify(c.category),
  note: c.sectionDesc,
  items: c.items.map((i) => ({
    name: i.name,
    desc: i.desc,
    bestSeller: !!i.bestSeller,
    variants: i.variants
      ? i.variants.map((v) => ({ label: v.label, price: v.price, veg: v.veg ?? !!i.veg }))
      : [{ price: i.price ?? 0, veg: !!i.veg }],
  })),
}));

export const rupee = (n: number) => `₹${n.toLocaleString('en-IN')}`;
export const isVeg = (i: MenuItem) => i.variants.every((v) => v.veg);
export const hasVeg = (i: MenuItem) => i.variants.some((v) => v.veg);
export const hasNonVeg = (i: MenuItem) => i.variants.some((v) => !v.veg);
