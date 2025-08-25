'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@store/useMenuStore";
import { usePopupStore } from "@store/usePopupStore";
import { useAuthStore } from "@store/useAuthStore";
import styled from "@components/MobileMenu/MobileMenu.module.scss";
import { popup_data } from "@mocks/popup";
import Link from "next/link";

const MobileMenu = () => {
  const { menu, closeMenu } = useMenuStore();
  const { logout, isAuthenticated } = useAuthStore();
  const { openPopup } = usePopupStore();
  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const handleAuthClick = (popupType) => {
    openPopup(popupType);
    closeMenu();
  };
  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <section className={`${styled.mobile_menu_container} ${menu ? styled.visible : ''}`}>
      <nav className={styled.mobile_nav}>
        <div className={styled.mobile_nav_item}>
          <Link href="/oeber" className={styled.mobile_link}>Oeber uns</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/kontakt" className={styled.mobile_link}>Kontakt</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/nutzungsbedingungen" className={styled.mobile_link}>Nutzungsbedingungen</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/datenschutzerklaerung" className={styled.mobile_link}>Datenschutzerklaerung</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/roeckzahlungspolitik" className={styled.mobile_link}>Roeckzahlungspolitik</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/versandrichtlinie" className={styled.mobile_link}>Versandrichtlinie</Link>
        </div>
        <div className={styled.mobile_nav_item}>
          <Link href="/zahlungsbedingungen" className={styled.mobile_link}>Zahlungsbedingungen</Link>
        </div>
      </nav>

      <div className={styled.mobile_auth_buttons}>
        {isAuthenticated ? (
          <button className={styled.mobile_auth_button_logout} onClick={handleLogout}>
            Ausloggen
          </button>
        ) : (
          <>
            <button className={styled.mobile_auth_button_login} onClick={() => handleAuthClick(popup_data.login)}>
              Anmelden
            </button>
            <button className={styled.mobile_auth_button_register} onClick={() => handleAuthClick(popup_data.register)}>
              Registrieren
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default MobileMenu;
