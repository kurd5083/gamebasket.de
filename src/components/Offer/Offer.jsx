import React from 'react'
import styled from '@components/Offer/Offer.module.scss'
import OfferForm from '@componentsui/OfferForm/OfferForm'

const Offer = () => {
  return (
    <section className={styled.offer}>
      <div className={styled.offer_bird}></div>
      <div className={styled.offer_content}>
        <div className={styled.offer_block}>
          <h2 className={styled.offer_block_title}>Fordern Sie Ihren Willkommensbonus an!</h2>
          <h3 className={styled.offer_subtitle}>Neu hier? 50% Rabatt sichern</h3>
          <p className={styled.offer_text}>Tauche in die Retro-Welt der Pixelträume ein und starte dein Abenteuer.</p>
          <OfferForm/>
        </div>
        <h1 className={styled.offer_title}>Exklusives Geschenk foer Neukunden</h1>
      </div>
    </section>
  )
}

export default Offer
