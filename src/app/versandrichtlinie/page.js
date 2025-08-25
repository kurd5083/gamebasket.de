import styled from '@styles/Policy.module.scss';

const Versandrichtlinie = () => {
  return (
    <section className={styled.policy_container}>
      <h2 className={styled.policy_head}>Versandrichtlinie</h2>

      <h3 className={styled.policy_title}>Bestellungen innerhalb Deutschlands</h3>
      <div className={styled.policy_block_children}>
        <p><strong>Lieferzeit & Bearbeitung:</strong></p>
        <ul className={styled.children_block_ul}>
          <li>Bestellungen werden innerhalb von 1–2 Werktagen bearbeitet (ausgenommen Wochenenden und Feiertage).</li>
          <li>Lieferung erfolgt in 2–4 Werktagen per DHL oder DPD.</li>
          <li>Alle Bestellungen oeber 50 € an deutsche Adressen sind versandkostenfrei.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Internationaler Versand</h3>
      <div className={styled.policy_block_children}>
        <p><strong>Lieferzeiten & Kosten:</strong></p>
        <table className={styled.children_block_table}>
          <thead>
            <tr>
              <th>Region</th>
              <th>Geschaetzte Lieferzeit</th>
              <th>Versandkosten (ca.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Europa (EU)</td>
              <td>5–10 Werktage</td>
              <td>€9,99–€15,99</td>
            </tr>
            <tr>
              <td>Nordamerika</td>
              <td>7–14 Werktage</td>
              <td>€14,99–€21,99</td>
            </tr>
            <tr>
              <td>Asien/Pazifik</td>
              <td>10–20 Werktage</td>
              <td>€17,99–€26,99</td>
            </tr>
            <tr>
              <td>Rest der Welt</td>
              <td>12–25 Werktage</td>
              <td>€20,99–€32,99</td>
            </tr>
          </tbody>
        </table>
        <p><em>Hinweis: Lieferzeiten sind Schaetzungen und kuennen sich durch Zollkontrollen verzuegern.</em></p>
      </div>

      <h3 className={styled.policy_title}>Zoll & Einfuhrgeboehren</h3>
      <div className={styled.policy_block_children}>
        <p>Bei internationalen Bestellungen kuennen Zollgeboehren, Steuern oder Abgaben anfallen, die vom Zielland erhoben werden. Diese Kosten traegt der Kunde. Wir kuennen diese Geboehren weder vorhersagen noch oebernehmen. Bitte kontaktieren Sie Ihr uertliches Zollamt foer laenderspezifische Informationen.</p>
      </div>

      <h3 className={styled.policy_title}>Kostenloser internationaler Versand</h3>
      <div className={styled.policy_block_children}>
        <p>Kostenloser Versand gilt foer internationale Bestellungen oeber 120 € (nach Abzug von Rabatten). Sperrige oder schwere Artikel sind von dieser Aktion ausgeschlossen.</p>
      </div>

      <h3 className={styled.policy_title}>Bestellabwicklung</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Bestellungen, die vor 14:00 Uhr MEZ eingehen, werden noch am selben Tag bearbeitet.</li>
          <li>An Wochenenden oder Feiertagen kann sich die Bearbeitung um 1–2 Tage verzuegern.</li>
          <li>Sendungsverfolgungsnummern werden nach dem Versand per E-Mail bereitgestellt.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Wichtige Hinweise</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li><strong>Korrektheit der Adresse:</strong> Proefen Sie Ihre Lieferadresse sorgfaeltig – wir oebernehmen keine Haftung foer Fehllieferungen aufgrund falscher Angaben.</li>
          <li><strong>Verzuegerungen:</strong> Extreme Wetterbedingungen, Zollkontrollen oder Probleme beim Spediteur kuennen Lieferzeiten verlaengern.</li>
          <li><strong>Verlorene Pakete:</strong> Kontaktieren Sie uns, wenn Ihre Bestellung nicht innerhalb von 10 Tagen nach dem voraussichtlichen Lieferdatum eingetroffen ist.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Kontakt</h3>
      <div className={styled.policy_block_children}>
        <p>
            <a href="mailto:support@gamebasket.de">📧 support@gamebasket.de</a><br/>
            <a href="tel:+491709182736">📞 +49 170 9182736</a>
        </p>
      </div>
    </section>
  )
}

export default Versandrichtlinie;
