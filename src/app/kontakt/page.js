import styled from './Kontakt.module.scss';

const Kontakt = () => {
  return (
    <section className={styled.kontakt}>
      <h2 className={styled.kontakt_head}>Kontaktieren Sie uns</h2>
      <div className={styled.kontakt_block}>
        <p className={styled.kontakt_paragraph}>Wenn Sie uns aus anderen Groenden als dem allgemeinen Support, der Unterstoetzung oder der Beratung kontaktieren moessen, verwenden Sie bitte die unten angegebenen Kontaktdaten. Bitte beachten Sie, dass wir keine Ratschlaege zu Streitigkeiten im Zusammenhang mit Gloecksspielen oder regulatorischen Anliegen geben kuennen. Unsere Posteingaenge werden nicht rund um die Uhr oeberwacht, aber wir bemoehen uns, innerhalb von zwei Werktagen zu antworten.</p>
        <p className={styled.kontakt_paragraph}>
            Foer Fragen oder Anliegen erreichen Sie uns unter:<br/>
            <a href="mailto:support@gamebasket.de">📧 support@gamebasket.de</a><br/>
            <a href="tel:+491709182736">📞 +49 170 9182736</a>
            </p>
      </div>
    </section>
  );
}

export default Kontakt;
