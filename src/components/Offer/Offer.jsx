import React from 'react'
import styled from '@components/Offer/Offer.module.scss'

const Offer = () => {
  return (
    <section className={styled.offer}>
       <div className={styled.offer_bird}></div> {/* Птица */}
      <div className={styled.offer_content}>

      <div className={styled.offer_form}>
        <h2 className={styled.offer_form_title}>Claim Your Epic Welcome Bonus!</h2>
        <h3 className={styled.offer_subtitle}>New Here? Enjoy 50% Off</h3>
        <p className={styled.offer_text}>Enter the retro world of pixel dreams and unlock your adventure now.</p>
        <p className={styled.offer_text}>Don’t miss your chance to unlock something special!</p>
        <label 
					className={styled.offer_label} 
					htmlFor="offer_title">
					Email
				</label>
        <input 
					className={styled.offer_input} 
					id='offer_title' 
					type="text" 
					placeholder='asd'
				/>
        <button className={styled.offer_button}>GRAB YOUR GIFT</button>
      </div>
      <h1 className={styled.offer_title}>Exklusives Geschenk für Neukunden</h1>
      </div>
    </section>
  )
}

export default Offer
