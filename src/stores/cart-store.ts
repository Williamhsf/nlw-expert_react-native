import { ProductProps } from '@/utils/data/products';
import { create } from "zustand"
import * as cartInMemory from './helpers/cart-in-memory'

type Stateprops = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void;
}

export type ProductCartProps = ProductProps & {
  quantity: number;
}

export const useCartStore = create<Stateprops>((set) => ({
  products: [],

  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
}))