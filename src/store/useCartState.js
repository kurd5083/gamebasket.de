import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useCartState = create(
    persist(
        (set, get) => ({
            carts: [],
            addToCart: (game, quantity) => {
                set((state) => {
                    const exclusiveGame = state.carts.some((cart) => cart.id == game.id)
                    if(exclusiveGame) {
                        return {
                            carts: state.carts.map(cart => 
                                cart.id == game.id ? {...cart, quantity: (cart.quantity || 1) + quantity} : cart
                            )
                        }
                    }
                    
                    return {carts: [...state.carts, {...game, quantity}]}
                })
            },
            removeCart: (id) => {
                set((state) => {
                    return {
                        carts: state.carts.filter((cart) => !id.includes(cart.id))
                    }
                })
            },
            updateCart: (id, quantity) => {
                set((state) => {
                    return {
                        carts: state.carts.map((cart) => cart.id == id ? {...cart, quantity: quantity} : cart)
                    }
                })
            },
            totalItems: () => {
                return get().carts.reduce((total, item) => total + item.quantity, 0)
            },
            totalPrice: () => {
                return get().carts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
            },
            totalDiscount: () => {
                return get().carts.reduce((total, item) => total + item.price / 100 * item.discount  * item.quantity, 0).toFixed(2)
            },
            clearCart: () => {
                set({ carts: [] })
            },
        }),
        { name: 'state-cart' }
    )
);