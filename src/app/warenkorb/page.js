'use client'
import { useState, useEffect } from 'react';
import styled from './Warenkorb.module.scss'
import { useCartState } from '@store/useCartState';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@lib/slugify';

const Warenkorb = () => {
	const { carts, removeCart, updateCart, totalPrice, totalDiscount, totalItems, clearCart } = useCartState();
	const [selectCart, setSelectCart] = useState([]);
	const [stateBtn, setStateBtn] = useState(false)
	const [mounted, setMounted] = useState(false);
	const [email, setEmail] = useState("");
	const [promo, setPromo] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => setMounted(true), []);

	const handleSelectCart = (id) => {
		if (id == 'all') {
			setStateBtn(prev => {
				const newState = !prev;
				setSelectCart(newState ? carts.map(cart => cart.id) : []);
				return newState;
			});
		} else {
			setSelectCart((prev) => {
				return (
					prev.includes(id) ? (
						prev.filter((item) => item != id)
					) : (
						[...prev, id]
					)
				)
			});
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setEmail("");
		setPromo("");

		setTimeout(() => {
			setIsSubmitted(false);
			clearCart();
		}, 3000);
	};

	return (
		<section className={styled.cart}>
			<header className={styled.cart_header}>
				<h2 className={styled.cart_title}>Warenkorb</h2>
				<p className={styled.cart_quantity}>{mounted ? totalItems() : 0} Artikel</p>
			</header>
			<div className={styled.cart_content}>
				<div className={styled.cart_content_left}>
					<div className={styled.cart_buttons}>
						<button
							className={styled.cart_button_select}
							onClick={() => handleSelectCart('all')}
						>
							<Image src="images/check_icon.svg" width={16} height={16} alt="Ausgew" />
							Alle auswaehlen
						</button>
						<button
							className={styled.cart_button_del}
							onClick={() => removeCart(selectCart)}
						>
							<Image src="images/del_icon_white.svg" width={16} height={16} alt="Lueschen" />
							Ausgewaehlte lueschen
						</button>
					</div>
					<ul className={styled.product_list}>
						{carts.length > 0 ? (
							carts.map((cart) => (
								<li key={cart.id} className={styled.product_item}>
									<button
										className={`${styled.game_select_button} ${selectCart.includes(cart.id) ? styled.active : ''} `}
										onClick={() => handleSelectCart(cart.id)}
									>
										<Image src="images/check_icon_white.svg" alt="Ausgew" width={16} height={16} />
									</button>
									<Link href={`/spiel/${slugify(cart.name)}`}>
										<Image
											className={styled.product_image}
											src={cart.cover}
											width={200}
											height={150}
											alt={cart.name}
										/>
									</Link>
									<div className={styled.product_details}>
										<div className={styled.product_details_content}>
											<Link href={`/spiel/${slugify(cart.name)}`}>
												<h4 className={styled.product_name}>{cart.name}</h4>
											</Link>
											<p className={styled.product_description}>{cart.description}</p>
										</div>
										<div className={styled.price_container}>
											{cart.discount ? (
												<>
													<s className={styled.old_price}>€ {cart.price}</s>
													<p className={styled.current_price}>€ {(cart.price - (cart.price / 100 * cart.discount)).toFixed(2)}</p>
												</>
											) : (
												<p className={styled.current_price}>€ {cart.price}</p>
											)}
											<div className={styled.product_actions}>
												<div className={styled.quantity_block}>
													<button
														className={styled.quantity_button_minus}
														onClick={() => updateCart(cart.id, Math.max(1, cart.quantity - 1))}
													>
														-
													</button>
													<input
														type="number"
														min="1"
														className={styled.quantity_input}
														value={cart.quantity}
														onChange={(e) => {
															const newQuantity = parseInt(e.target.value) || 1;
															updateCart(cart.id, Math.max(1, newQuantity));
														}}
													/>
													<button
														className={styled.quantity_button_plus}
														onClick={() => updateCart(cart.id, cart.quantity + 1)}
													>
														+
													</button>
												</div>
												<button
													className={styled.delete_item_button}
													onClick={() => removeCart([cart.id])}
												>
													<Image src="images/del_icon.svg" width={20} height={20} alt="Del" />
												</button>
											</div>
										</div>
									</div>
								</li>
							))
						) : (
							<p className={styled.empty_message}>Ihr Warenkorb ist leer</p>
						)}
					</ul>
				</div>
				<div className={styled.cart_content_right}>
					<div className={styled.right_content}>
						<input
							type="text"
							placeholder="Gutscheincode eingeben"
							className={styled.promo_input}
							onChange={(e) => setPromo(e.target.value)}
							value={promo}
						/>
						<div className={styled.price_blocks}>
							<div className={styled.price_block}>
								<p>{mounted ? totalItems() : 0} Artikel</p>
								<p>€{mounted ? totalPrice() : 0}</p>
							</div>
							<div className={styled.price_block}>
								<p>Rabatt</p>
								<p>€{mounted ? totalDiscount() : 0}</p>
							</div>
							<div className={styled.total_block}>
								<h3>Gesamt</h3>
								<h3>€{mounted ? (totalPrice() - totalDiscount()).toFixed(2) : 0}</h3>
							</div>
						</div>
					</div>
					{isSubmitted ? (
						<div className={styled.success_message}>
							<p>Vielen Dank foer Ihre Bestellung!</p>
							<p>Wir werden uns in Koerze an die angegebene E-Mail-Adresse wenden.</p>
							<p>Ihre Bestellung wird derzeit bearbeitet.</p>
						</div>
					) : (
						<form className={styled.order_form} onSubmit={handleSubmit}>
							<p className={styled.form_subtext}>
								Geben Sie Ihre E-Mail ein, um Ihren Kauf zu bestaetigen - schnell und einfach!
							</p>
							<input
								type="email"
								placeholder="Geben Sie Ihre E-Mail ein"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={styled.form_input}
							/>
							<button type="submit" className={styled.submit_button}>
								Schliessen Sie Ihren Kauf ab
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	)
}

export default Warenkorb
