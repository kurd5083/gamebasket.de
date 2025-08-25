import styled from '@components/GameCard/GameCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@lib/slugify'
import AddToCart from "@componentsUi/AddToCart/AddToCart";

const GameCard = ({ game }) => {
  return (
    <div className={styled.card}>
      <div className={styled.cover_wrapper}>
        <Link href={`/spiel/${slugify(game.name)}`}>
          <Image 
            src={game.cover} 
            className={styled.cover}
            width={400}
            height={250}
            alt={game.name} 
          />
        </Link>
        <div className={styled.rating}>{game.rating.toFixed(1)}
          <Image 
            src="/images/star_icon.svg" 
            width={18}
            height={18}
            alt="Stern" 
          />
        </div>
      </div>
      <div className={styled.info}>
        <Link href={`/spiel/${slugify(game.name)}`}><h2 className={styled.name}>{game.name}</h2></Link>
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
        <AddToCart game={game}/>
      </div>
    </div>
  );
};

export default GameCard;
