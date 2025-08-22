'use client'
import React, { useEffect, useState } from 'react'
import styled from "@components/Cards/Cards.module.scss";
import GameCard from "@components/GameCard/GameCard";
import { useFiltredState } from '@store/useFiltredState'

const Cards = ({ games }) => {
    const [filtredGames, setFiltredGames] = useState(games);
    const { filtred } = useFiltredState();

    useEffect(() => {
        const newData = filtred 
            ? games.filter(game => game.genres.includes(filtred)) 
            : games;
        setFiltredGames(newData);
    }, [filtred, games]);

    return (
        <section className={styled.cards}>
            {filtredGames.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
        </section>
    )
}

export default Cards
