'use client'
import React, { useState } from "react";
import { useCartState } from "@store/useCartState";
import styled from '@componentsUi/AddToCart/AddToCart.module.scss'

const AddToCart = ({ game }) => {
    const { addToCart } = useCartState();
    const [btnState, setBtnState] = useState(false);
    const handleAddToCart = () => {
    setBtnState(true)
    addToCart(game, 1)
    setTimeout(() => {
      setBtnState(false)
    }, 2000);
  }
    return (
        <button 
            className={styled.add_to_cart} 
            onClick={handleAddToCart} 
            disabled={btnState ? true : false}
        >
            {btnState ? "Aktualisiert!" : "In den Warenkorb legen"}
        </button>
    )
}

export default AddToCart
