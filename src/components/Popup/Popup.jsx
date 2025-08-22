'use client'
import { useEffect, useState } from "react";
import styled from '@components/Popup/Popup.module.scss';
import { usePopupStore } from '@store/usePopupStore';
import { useAuthStore } from "@store/useAuthStore";
import { popup_data } from '@mocks/popup';

const Popup = () => {
	const { popup, openPopup, isPopupOpen, closePopup } = usePopupStore();
	const { login, register } = useAuthStore();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [error, setError] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const resetForm = () => {
		setEmail('');
		setPassword('');
		setRepeatPassword('');
		setError('');
	}

	useEffect(() => {
		if (isPopupOpen()) resetForm();
	}, [isPopupOpen(), popup]);

	if (!isPopupOpen()) return null;

	const handleLinkClick = () => {
		const newPopupType = popup.title === "Konto erstellen" ? popup_data.login : popup_data.register;
		openPopup(newPopupType);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (popup.title === "Konto erstellen") {
				await register(email, password, repeatPassword);
			} else {
				await login(email, password);
			}
			resetForm();
			closePopup();
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<section className={styled.popup_overlay} onClick={() => closePopup()}>
			<div className={styled.popup_content} onClick={(e) => e.stopPropagation()}>
				<button className={styled.popup_close} onClick={() => closePopup()}>
					<img src='/images/del_icon.svg' alt="Schließen" />
				</button>
				<img className={styled.popup_logo} src='/images/logo.png' alt="Logo" />
				<h2 className={styled.popup_title}>{popup.title}</h2>
				<p className={styled.popup_desc}>{popup.desc}</p>

				<form className={styled.popup_form} onSubmit={handleSubmit}>
					<input
						className={styled.mail_input}
						type="email"
						placeholder="Geben Sie Ihre E-Mail ein"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoComplete="off"
					/>

					<div className={styled.popup_form_container}>
						<input
							className={styled.password_input}
							type={showPassword ? "text" : "password"}
							placeholder="Geben Sie Ihr Passwort ein"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="new-password"
						/>
						<button
							type="button"
							className={styled.eye_button}
							onClick={() => setShowPassword(!showPassword)}
						>
							<img src={showPassword ? '/images/eye_open_icon.svg' : '/images/eye_close_icon.svg'} alt="Passwort" />
						</button>
					</div>

					{popup.repeatPassword && (
						<input
							className={styled.password_input}
							type="password"
							placeholder="Wiederholen Sie Ihr Passwort"
							value={repeatPassword}
							onChange={(e) => setRepeatPassword(e.target.value)}
							required
							autoComplete="new-password"
						/>
					)}

					<button className={styled.form_button} type="submit">
						{popup.btnForm}
					</button>

					{error && <p className={styled.popup_error}>{error}</p>}

					<p className={styled.popup_subtext}>{popup.subtext}</p>

					<button className={styled.link_button} type="button" onClick={handleLinkClick}>
						{popup.btnLink}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Popup;
