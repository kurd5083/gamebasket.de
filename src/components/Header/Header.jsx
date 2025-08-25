import styled from '@components/Header/Header.module.scss'
import HeaderActions from '@componentsui/HeaderActions/HeaderActions'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styled.header}>
            <section className={styled.header_content}>
                <div className={styled.header_left}>
                    <Link href="/">
                        <Image 
                        className={styled.header_logo} 
                        src="/images/logo.webp" 
                        width={100}
                        height={60}
                        alt="Logo" 
                        />
                    </Link>
                </div>
                <HeaderActions/>
            </section>
        </header>
    )
}

export default Header
