import styled from '@styles/Policy.module.scss';

const roeckzahlungspolitik = () => {
  return (
    <section className={styled.policy_container}>
      <h2 className={styled.policy_head}>Roeckerstattungsrichtlinie</h2>

      <h3 className={styled.policy_title}>30-taegiges Roeckgaberecht</h3>
      <div className={styled.policy_block_children}>
        <p>Sie haben 30 Tage ab dem Erhalt Ihres Artikels Zeit, um eine Roeckgabe anzufordern.</p>

        <div>
          <h4 className={styled.children_title}>Bedingungen foer die Roeckgabe</h4>
          <ul className={styled.children_block_ul}>
            <li>Artikel moessen unbenutzt, ungeueffnet und im Originalzustand sein (inklusive Etiketten, Siegel und Verpackung).</li>
            <li>Ein goeltiger Kaufbeleg oder Kaufnachweis ist erforderlich.</li>
            <li>Sammelkarten moessen in der originalen, ungeueffneten Verpackung ohne Manipulationsspuren bleiben.</li>
            <li>Gebrauchte Artikel sind nur zum Umtausch berechtigt, es sei denn, sie sind defekt.</li>
          </ul>
        </div>

        <div>
          <h4 className={styled.children_title}>So beantragen Sie eine Roeckgabe</h4>
          <ul className={styled.children_block_ul}>
            <li>Senden Sie eine Roeckgabeanfrage oeber unser Kontaktformular (inklusive Bestellnummer und Roeckgabegrund).</li>
            <li>Nach Genehmigung erhalten Sie per E-Mail eine Roecksendegenehmigung und Anweisungen.</li>
            <li>Bitte senden Sie keine Artikel ohne Genehmigung zuroeck – unautorisierte Roecksendungen werden abgelehnt.</li>
          </ul>
        </div>
      </div>

      <h3 className={styled.policy_title}>Beschaedigungen & Maengel</h3>
      <div className={styled.policy_block_children}>
        <p>Proefen Sie Ihre Bestellung bei Lieferung. Sollte ein Artikel beschaedigt, defekt oder falsch geliefert sein, melden Sie dies bitte sofort oeber das Kontaktformular mit:</p>
        <ul className={styled.children_block_ul}>
          <li>Ihrer Bestellnummer</li>
          <li>Beschreibung des Problems (Fotos, falls mueglich)</li>
        </ul>
        <p>Wir antworten innerhalb von 72 Stunden und stellen bei Bedarf ein vorfrankiertes Roecksendeetikett zur Verfoegung. Fehlerhafte Artikel werden vor der Roeckerstattung oeberproeft.</p>
      </div>

      <h3 className={styled.policy_title}>Nicht roeckgabefaehige Artikel</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Reduzierte Artikel/Sale-Artikel</li>
          <li>Geschenkkarten</li>
          <li>Abonnements</li>
          <li>Exklusive oder massgefertigte Produkte</li>
        </ul>
        <p>Bei Fragen oder Ausnahmen kontaktieren Sie uns bitte.</p>
      </div>

      <h3 className={styled.policy_title}>Umtausch</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Senden Sie den ursproenglichen Artikel gemaess dem Roeckgabeverfahren zuroeck.</li>
          <li>Nach Genehmigung der Roecksendung bestellen Sie den gewoenschten Artikel neu.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Roeckerstattungen</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Roeckerstattungen werden nach Erhalt und Oeberproefung der Roecksendung bearbeitet.</li>
          <li>Genehmigte Roeckerstattungen werden innerhalb von 3–5 Werktagen auf die ursproengliche Zahlungsmethode zuroeckgebucht (Bankbearbeitungszeiten kuennen variieren).</li>
          <li>Versandkosten werden nur bei beschaedigten oder defekten Artikeln erstattet.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Roecksendung</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Sie tragen die Kosten foer die Roecksendung, ausser es handelt sich um einen Fehler unsererseits (z. B. falscher Artikel geliefert).</li>
          <li>Vorfrankierte Etiketten werden bei beschaedigten oder defekten Artikeln bereitgestellt.</li>
        </ul>
        <p><strong>Roecksendeadresse:</strong></p>
        <address>
          GameBasket Retourenabteilung<br />
          Hafenstrasse 12<br />
          20457 Hamburg<br />
          Deutschland
        </address>
        <p>
          <a href="mailto:support@gamebasket.de">📧 support@gamebasket.de</a><br/>
          <a href="tel:+491709182736">📞 +49 170 9182736</a>
          </p>
      </div>
    </section>
  )
}

export default roeckzahlungspolitik;
