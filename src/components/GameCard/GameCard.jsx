'use client'
import styled from '@components/GameCard/GameCard.module.scss';
import { useEffect, useState } from 'react';
import { useCartState } from '@store/useCartState';
import Link from 'next/link';
import Image from 'next/image';

const GameCard = ({ game }) => {
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
    <div className={styled.card}>
      <div className={styled.cover_wrapper}>
        <Link href={`/spiel/${game.name}`}>
          <Image 
          src={game.cover} 
          alt={game.name} 
          className={styled.cover}
          width={400}
          height={250}
          />
        </Link>
        <div className={styled.rating}>{game.rating.toFixed(1)}
          <Image 
          src="/images/star_icon.svg" 
          width={18}
          height={18}
          alt="" 
          />
        </div>
      </div>

      <div className={styled.info}>
        <Link href={`/spiel/${game.name}`}><h2 className={styled.name}>{game.name}</h2></Link>
        <p className={styled.description}>{game.description} </p>

        <div className={styled.genres}>
          {game.genres.map((genre) => (
            <span key={genre} className={styled.genre}>
              {genre}
            </span>
          ))}
        </div>
        <div className={styled.prices}>
          {game.discount ? (
            <>
            <s className={styled.old_price}>€ {game.price}</s>
            <p className={styled.new_price}>€ {(game.price - (game.price / 100 * game.discount)).toFixed(2)}</p>
            <p className={styled.discount}>{game.discount} %</p>
            </>
          ): (
            <p className={styled.new_price}>€ {game.price}</p>
          )}
          
        </div>
        <div className={styled.btn_container} >
          <button
            className={styled.add_to_cart}
            onClick={handleAddToCart}
            disabled={btnState ? true : false}
          >
            {btnState ? "Aktualisiert!" : "In den Warenkorb legen"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default GameCard;
