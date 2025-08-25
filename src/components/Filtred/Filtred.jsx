'use client'
import React from 'react'
import styled from '@components/Filtred/Filtred.module.scss'
import { newArrayGenres } from '@mocks/games'
import { useFiltredState } from '@store/useFiltredState'

const Filtred = () => {
    const {filtred, setFiltred} = useFiltredState();
    const handleGanre = (genre) => {
        filtred == genre ? setFiltred(null) : setFiltred(genre)
    }
    
    return (
        <section className={styled.filtred}>
            <div className={styled.filtred_content}>
                {newArrayGenres.map((genre, index) => (
                    <button 
                        key={index}
                        className={filtred === genre ? styled.active : ''}
                        onClick={() => handleGanre(genre)} 
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Filtred
