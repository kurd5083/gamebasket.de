'use client'
import React, { useState } from 'react'
import styled from '@componentsUi/OfferForm/OfferForm.module.scss'

const OfferForm = () => {
	const [stateForm, setStateForm] = useState(false);
	const [email, setEmail] = useState('')
	const handleEmail = (e) => {
		e.preventDefault();
		setStateForm(true)
		setEmail('');
		setTimeout(() => {
			setStateForm(false)
		}, 3000);
	}

	return (
		<div>
			{stateForm ? (
				<p className={styled.success_message}>Vielen Dank! Ihr Gutscheincode ist auf dem Weg in Ihren Posteingang.</p>
			) : (
				<form className={styled.offer_form} onSubmit={handleEmail}>
					<label
						className={styled.offer_label}
						htmlFor="offer_title">
						Email
					</label>
					<input
						className={styled.offer_input}
						id='offer_title'
						type="email"
						placeholder='E-Mail eingeben'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<button 
						className={styled.offer_button} 
						type="submit"
					>
						GRAB YOUR GIFT
					</button>
				</form >
			)}
		</div>
	)
}

export default OfferForm
