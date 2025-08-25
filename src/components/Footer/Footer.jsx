import styled from '@components/Footer/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styled.footer}>
            <section className={styled.footer_content}>
                <Link href="/">
                    <Image 
                        className={styled.footer_logo} 
                        src="/images/logo.webp" 
                        width={240} 
                        height={150} 
                        alt="Logo"
                    />
                </Link>
                <div className={styled.footer_columns}>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Information</h2>
                        <ul className={styled.footer_column_list}>
                            <Link href="/oeber"><li className={styled.footer_column_item}>Oeber uns</li></Link>
                            <Link href="/kontakt"><li className={styled.footer_column_item}>Kontakt</li></Link>
                        </ul>
                    </div>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Richtlinien</h2>
                        <ul className={styled.footer_column_list}>
                            <Link href="/nutzungsbedingungen"><li className={styled.footer_column_item}>Nutzungsbedingungen</li></Link>
                            <Link href="/datenschutzerklaerung"><li className={styled.footer_column_item}>Datenschutzerklaerung</li></Link>
                            <Link href="/roeckzahlungspolitik"><li className={styled.footer_column_item}>Roeckzahlungspolitik</li></Link>
                            <Link href="/versandrichtlinie"><li className={styled.footer_column_item}>Versandrichtlinie</li></Link>
                            <Link href="/zahlungsbedingungen"><li className={styled.footer_column_item}>Zahlungsbedingungen</li></Link>
                        </ul>
                    </div>
                    <div className={styled.footer_column}>
                        <h2 className={styled.footer_column_title}>Zahlungsmethoden</h2>
                        <div>
                            <Image src="/images/payments/apple_icon.svg" width={50} height={30} alt="Apple" />
                            <Image src="/images/payments/google_icon.svg" width={50} height={30} alt="Google" />
                            <Image src="/images/payments/klarna_icon.svg" width={50} height={30} alt="Klarna" />
                            <Image src="/images/payments/mastercard_icon.svg" width={50} height={30} alt="Mastercard" />
                            <Image src="/images/payments/visa_icon.svg" width={50} height={30} alt="Visa" />
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
