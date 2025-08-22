import React from 'react'
import styled from '@components/Footer/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styled.footer}>
            <section className={styled.footer_content}>
                <Link href="/"><img className={styled.footer_logo} src="/images/logo.png" alt="" /></Link>
                <div className={styled.footer_columns}>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Information</h2>
                        <ul className={styled.footer_column_list}>
                            <Link href="/oeber"><li className={styled.footer_column_item}>Über uns</li></Link>
                            <Link href="/kontakt"><li className={styled.footer_column_item}>Kontakt</li></Link>
                        </ul>
                    </div>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Richtlinien</h2>
                        <ul className={styled.footer_column_list}>
                            <Link href="/servicebedingungen"><li className={styled.footer_column_item}>Servicebedingungen</li></Link>
                            <Link href="/datenschutzerklaerung"><li className={styled.footer_column_item}>Datenschutzerklärung</li></Link>
                            <Link href="/rückzahlungspolitik"><li className={styled.footer_column_item}>Rückzahlungspolitik</li></Link>
                            <Link href="/schifffahrtspolitik"><li className={styled.footer_column_item}>Schifffahrtspolitik</li></Link>
                            <Link href="/zahlungsbedingungen"><li className={styled.footer_column_item}>Zahlungsbedingungen</li></Link>
                        </ul>
                    </div>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Zahlungsmethoden</h2>
                        <div>
                            <img src="/images/payments/apple_icon.svg" alt="" />
                            <img src="/images/payments/google_icon.svg" alt="" />
                            <img src="/images/payments/klarna_icon.svg" alt="" />
                            <img src="/images/payments/mastercard_icon.svg" alt="" />
                            <img src="/images/payments/visa_icon.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styled.footer_copyright}>
                <p>Copyright © 2025</p>
            </section>
        </footer>
    )
}

export default Footer
