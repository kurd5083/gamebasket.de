import React from 'react'
import styled from '@components/Offer/Offer.module.scss'
import OfferForm from '@componentsui/OfferForm/OfferForm'

const Offer = () => {
  return (
    <section className={styled.offer}>
      <div className={styled.offer_bird}></div>
      <div className={styled.offer_content}>
        <div className={styled.offer_block}>
          <h2 className={styled.offer_block_title}>Claim Your Epic Welcome Bonus!</h2>
          <h3 className={styled.offer_subtitle}>New Here? Enjoy 50% Off</h3>
          <p className={styled.offer_text}>Enter the retro world of pixel dreams and unlock your adventure now.</p>
          <p className={styled.offer_text}>Don’t miss your chance to unlock something special!</p>
          <OfferForm/>
        </div>
        <h1 className={styled.offer_title}>Exklusives Geschenk foer Neukunden</h1>
      </div>
    </section>
  )
}

export default Offer
