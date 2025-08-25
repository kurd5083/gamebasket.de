import { Goblin_One , Inter } from "next/font/google";
import "../../styles/globals.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Popup from "@components/Popup/Popup";
import MobileMenu from "@components/MobileMenu/MobileMenu";
import CookiePopup from "@components/CookiePopup/CookiePopup";

const goblinOne = Goblin_One({
  weight: "400",
  variable: "--font-goblin-one",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GameBasket – Dein Online-Shop foer PC-Spiele",
  description: "Entdecke und kaufe die neuesten PC-Spiele online bei GameBasket. Grosse Auswahl, schnelle Lieferung und tolle Angebote!",
   icons: {
    icon: '/favicon.webp', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${goblinOne.variable} ${inter.variable}`}>
        <Header/>
        <main>
          {children}
          <Popup/>
          <MobileMenu/>
        </main>
        <CookiePopup/>
        <Footer/>
      </body>
    </html>
  );
}
