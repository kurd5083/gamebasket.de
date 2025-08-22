'use client'
import React from 'react'
import styled from '@components/Header/Header.module.scss'
import SearchInput from '@componentsUi/SearchInput/SearchInput'
import { usePopupStore } from '@storeusePopupStore'
import { popup_data } from '@mocks/popup'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const { popup, openPopup, isPopupOpen } = usePopupStore();
    return (
        <header className={styled.header}>
            <section className={styled.header_content}>
                <div className={styled.header_left}>
                    <Link href="/">
                        <Image 
                        className={styled.header_logo} 
                        src="/images/logo.png" 
                        width={100}
                        height={60}
                        alt="Logo" 
                        />
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
                            <Image 
                                src="/images/cart_icon.svg" 
                                width={24} 
                                height={24} 
                                alt=""
                            />
                            <p className={styled.header_cart_quantity}>1</p>
                        </Link>
                    </button>
                </div>
            </section>
        </header>
    )
}

export default Header
