import styles from './Oeber.module.scss';

const Oeber = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about_head}>Über uns</h2>
      <div className={styles.about_block}>
        <p className={styles.about_paragraph}>
          Willkommen bei GameBasket – deiner Anlaufstelle für Retro-Gaming in digitaler Form. Seit 2018 mit Sitz in Berlin, bieten wir Gamer:innen alles, was das Herz begehrt, von klassischen Spielen bis hin zu nostalgischen Highlights, alles zu attraktiven Preisen.
        </p>
        <p className={styles.about_paragraph}>
          Ob legendäre Jump-&apos;n&apos;-Run-Abenteuer, packende RPG-Klassiker oder pixelige Spiele, die ganze Generationen geprägt haben – bei uns findet jeder Retro-Fan seine Lieblingsschätze.
        </p>
        <p className={styles.about_paragraph}>
          Wir legen großen Wert auf schnelle Lieferung der Game-Keys, sichere Zahlungsmöglichkeiten und einen zuverlässigen Support. Alle Keys sind 100 % authentisch und werden unmittelbar nach dem Kauf zugestellt.
        </p>
        <p className={styles.about_paragraph}>
          Schließe dich unserer wachsenden Community von Retro-Enthusiasten an, erweitere deine Spielesammlung und starte noch heute dein nächstes digitales Abenteuer mit GameBasket!
        </p>
      </div>
    </section>
  );
}

export default Oeber;
