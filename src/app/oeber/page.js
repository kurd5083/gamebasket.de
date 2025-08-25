import styled from './Oeber.module.scss';

const Oeber = () => {
  return (
    <section className={styled.about}>
      <h2 className={styled.about_head}>Oeber uns</h2>
      <div className={styled.about_block}>
        <p className={styled.about_paragraph}>
          Willkommen bei GameBasket – deiner Anlaufstelle foer Retro-Gaming in digitaler Form. Seit 2018 mit Sitz in Berlin, bieten wir Gamer:innen alles, was das Herz begehrt, von klassischen Spielen bis hin zu nostalgischen Highlights, alles zu attraktiven Preisen.
        </p>
        <p className={styled.about_paragraph}>
          Ob legendaere Jump-&apos;n&apos;-Run-Abenteuer, packende RPG-Klassiker oder pixelige Spiele, die ganze Generationen gepraegt haben – bei uns findet jeder Retro-Fan seine Lieblingsschaetze.
        </p>
        <p className={styled.about_paragraph}>
          Wir legen grossen Wert auf schnelle Lieferung der Game-Keys, sichere Zahlungsmueglichkeiten und einen zuverlaessigen Support. Alle Keys sind 100 % authentisch und werden unmittelbar nach dem Kauf zugestellt.
        </p>
        <p className={styled.about_paragraph}>
          Schliesse dich unserer wachsenden Community von Retro-Enthusiasten an, erweitere deine Spielesammlung und starte noch heute dein naechstes digitales Abenteuer mit GameBasket!
        </p>
      </div>
    </section>
  );
}

export default Oeber;
