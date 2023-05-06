import { create } from 'zustand';

interface CartState {
  cart: any[];
  product: any;
  setProduct: (params: { newProduct: any }) => void;
  addItemToCart: (params: { newItem: any }) => void;
  removeItemFromCart: (params: { itemIndex: number }) => void;
  emptyCart: () => void;
}

export const useCart = create<CartState>()((set, get) => ({
  cart: [],
  product: {},

  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },

  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };
    });
  },

  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  emptyCart: () => {
    set((state) => {
      const newCart: never[] = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

export const useModal = create<ModalState>()((set, get) => ({
  isModalOpen: false,

  setIsModalOpen: () => {
    set((state) => {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    });
  },
}));
