import React, { use } from "react";
import { slugify } from "@lib/slugify";
import { games } from "@mocks/games";
import Image from "next/image";
import styled from './Game.module.scss';
import AddToCart from "@componentsUi/AddToCart/AddToCart";

const Game = ({ params }) => {
  const { slug } = use(params);
  const game = games.find((g) => slugify(g.name) === slug);

  return (
      <section className={styled.game_container}>
        <h1 className={styled.game_name}>{game.name}</h1>
        <div className={styled.game_cover}>
          <Image src={game.cover} alt={game.name} width={800} height={700} />
        </div>
        <div className={styled.game_info}>
          <p>{game.description}</p>
          <p><strong>Plattformen:</strong> {game.platforms.join(", ")}</p>
          <p><strong>Genres:</strong> {game.genres.join(", ")}</p>
          <p><strong>Entwickler:</strong> {game.developers.join(", ")}</p>
          <p><strong>Publisher:</strong> {game.publishers.join(", ")}</p>
          <p><strong>Verueffentlichungsdatum:</strong> {game.released}</p>
          <p><strong>Bewertung:</strong> {game.rating}</p>
          <p>
            <strong>Preis:</strong> ${game.price}{" "}
            {game.discount > 0 && <span>(-{game.discount}%)</span>}
          </p>
          <AddToCart game={game}/>
        </div>

        <div className={styled.game_screenshots}>
          <h2>Screenshots</h2>
          <div className={styled.screenshots_grid}>
            {game.screenshots.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`screenshot-${idx}`}
                width={300}
                height={200}
                className={styled.screenshot}
              />
            ))}
          </div>
        </div>
      </section>
  );
}

export default Game;
