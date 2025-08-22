import styles from './Kontakt.module.scss';

const Kontakt = () => {
  return (
    <section className={styles.kontakt}>
      <h2 className={styles.kontakt_head}>Kontaktieren Sie uns</h2>
      <div className={styles.kontakt_block}>
        <p className={styles.kontakt_paragraph}>Wenn Sie uns aus anderen Gründen als dem allgemeinen Support, der Unterstützung oder der Beratung kontaktieren müssen, verwenden Sie bitte die unten angegebenen Kontaktdaten. Bitte beachten Sie, dass wir keine Ratschläge zu Streitigkeiten im Zusammenhang mit Glücksspielen oder regulatorischen Anliegen geben können. Unsere Posteingänge werden nicht rund um die Uhr überwacht, aber wir bemühen uns, innerhalb von zwei Werktagen zu antworten.</p>
        <p className={styles.kontakt_paragraph}>
            Für Fragen oder Anliegen erreichen Sie uns unter:<br/>
            <a href="mailto:support@gamebasket.de">📧 support@gamebasket.de</a><br/>
            <a href="tel:+493093886721">📞 +49 30 93886721</a>
            </p>
      </div>
    </section>
  );
}

export default Kontakt;
