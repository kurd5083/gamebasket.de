'use client'
import React, { useEffect, useState } from 'react'
import { popup_data } from '@mocks/popup'
import { usePopupStore } from '@store/usePopupStore'
import styled from '@componentsUi/HeaderActions/HeaderActions.module.scss'
import { useAuthStore } from '@store/useAuthStore'
import { useMenuStore } from '@store/useMenuStore'
import Link from 'next/link'
import Image from 'next/image'
import { useCartState } from '@storeuseCartState'

const HeaderActions = () => {
	const { openPopup } = usePopupStore();
	const { logout, isAuthenticated } = useAuthStore();
	const { menu, openMenu, closeMenu } = useMenuStore();
	const { totalItems } = useCartState();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const handleAuthClick = (popupType) => {
		openPopup(popupType);
		closeMenu();
	};

	const handleLogout = () => {
		logout();
		closeMenu();
	};
	
	return (
		<div className={styled.header_actions}>
			<div className={styled.btns_actions}>
				{isAuthenticated ? (
					<button className={styled.btn_logout} onClick={handleLogout}>
						Ausloggen
					</button>
				) : (
					<>
						<button className={styled.btn_login} onClick={() => handleAuthClick(popup_data.login)}>
							Anmelden
						</button>
						<button className={styled.btn_register} onClick={() => handleAuthClick(popup_data.register)}>
							Registrieren
						</button>
					</>
				)}
			</div>
			<button className={styled.header_cart}>
				<Link href="/warenkorb">
					<Image
						src="/images/cart_icon.svg"
						width={24}
						height={24}
						alt="Warenkorb"
					/>
					<p className={styled.header_cart_quantity}>{mounted ? totalItems() : 0}</p>
				</Link>
			</button>
			<button className={styled.btn_menu} onClick={menu ? closeMenu : openMenu}>
				<img src={menu ? "/images/del_icon.svg" : "/images/burger_icon.svg"} alt="Menoe" />
			</button>
		</div>
	)
}

export default HeaderActions
