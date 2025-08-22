'use client'
import React from 'react'
import Link from 'next/link'
import styled from '@components/Header/Header.module.scss'
import SearchInput from '@componentsUi/SearchInput/SearchInput'
import { usePopupStore } from '@storeusePopupStore'
import { popup_data } from '@mocks/popup'

const Header = () => {
    const { popup, openPopup, isPopupOpen } = usePopupStore();
    return (
        <header className={styled.header}>
            <section className={styled.header_content}>
                <div className={styled.header_left}>
                    <Link href="/">
                        <img className={styled.header_logo} src="/images/logo.png" alt="Logo" />
                    </Link>
                    <SearchInput />
                </div>
                <div className={styled.header_right}>
                    <div className={styled.header_actions}>
                        <button 
                            className={styled.header_login}
                            onClick={() => openPopup(popup_data.login)}
                        >
                            Anmeldung
                        </button>
                        <button 
                            className={styled.header_register}
                            onClick={() => openPopup(popup_data.register)}
                        >
                            Registrieren
                        </button>
                    </div>

                    <button className={styled.header_cart}>
                        <Link href="/warenkorb">
                            <img src="/images/cart_icon.svg" alt=""/>
                            <p className={styled.header_cart_quantity}>1</p>
                        </Link>
                    </button>
                </div>
            </section>
        </header>
    )
}

export default Header
