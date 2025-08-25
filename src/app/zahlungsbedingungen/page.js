import styled from '@styles/Policy.module.scss';

const Zahlungsrichtlinie = () => {
  return (
    <section className={styled.policy_container}>
      <h2 className={styled.policy_head}>Zahlungsrichtlinie</h2>

      <h3 className={styled.policy_title}>Akzeptierte Zahlungsmethoden</h3>
      <div className={styled.policy_block_children}>
        <p>Wir akzeptieren die folgenden sicheren Zahlungsoptionen:</p>
        <table className={styled.children_block_table}>
          <thead>
            <tr>
              <th>Methode</th>
              <th>Details</th>
              <th>Bearbeitungszeit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kredit-/Debitkarten</td>
              <td>Visa, Mastercard, American Express, Discover</td>
              <td>Sofort</td>
            </tr>
            <tr>
              <td>PayPal</td>
              <td>Zahlung oeber PayPal-Konto oder als Gast per Karte</td>
              <td>Sofort</td>
            </tr>
            <tr>
              <td>Apple Pay</td>
              <td>Verfoegbar foer iOS/Mac-Nutzer</td>
              <td>Sofort</td>
            </tr>
            <tr>
              <td>Google Pay</td>
              <td>Verfoegbar foer Android/Web-Nutzer</td>
              <td>Sofort</td>
            </tr>
            <tr>
              <td>Klarna</td>
              <td>Optionen „Spaeter bezahlen“ oder Ratenzahlung (nur DE/EU)</td>
              <td>1–3 Werktage</td>
            </tr>
          </tbody>
        </table>
        <p><em>Alle Transaktionen werden mittels SSL-Technologie verschloesselt.</em></p>
      </div>

      <h3 className={styled.policy_title}>Bestellabwicklung & Zahlungoeberproefung</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li><strong>Sofortige Bestaetigung:</strong> Die meisten Zahlungen werden umgehend genehmigt.</li>
          <li><strong>Sicherheitsproefungen:</strong> Einige Bestellungen kuennen eine manuelle Oeberproefung erfordern (1–2 Geschaeftsstunden).</li>
          <li><strong>Fehlgeschlagene Zahlungen:</strong> Sie erhalten eine E-Mail mit Anweisungen foer einen neuen Versuch.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Waehrung & Preise</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>Alle Preise werden in EUR (€) angezeigt.</li>
          <li>Internationale Kunden: Ihre Bank kann Umrechnungsgeboehren erheben. Bitte erfragen Sie die genauen Saetze bei Ihrer Bank.</li>
          <li>Preisgarantie: Bezahlte Bestellungen werden auch bei spaeteren Preisanpassungen zum ursproenglichen Preis ausgefoehrt.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Roeckerstattungen & Stornierungen</h3>
      <div className={styled.policy_block_children}>
        <p><strong>Abwicklung von Roeckerstattungen:</strong></p>
        <table className={styled.children_block_table}>
          <thead>
            <tr>
              <th>Methode</th>
              <th>Zeitrahmen (nach Genehmigung)</th>
              <th>Anmerkungen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kredit-/Debitkarte</td>
              <td>3–5 Werktage</td>
              <td>Abhaengig von Ihrer Bank</td>
            </tr>
            <tr>
              <td>PayPal</td>
              <td>3–5 Werktage</td>
              <td>Roeckerstattung auf Ihr PayPal-Guthaben</td>
            </tr>
            <tr>
              <td>Apple Pay</td>
              <td>Bis zu 5 Werktage</td>
              <td>Roeckerstattung auf die ursproenglich verwendete Karte</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Stornierung von Bestellungen:</strong></p>
        <ul className={styled.children_block_ul}>
          <li>Anfragen moessen innerhalb von 1 Stunde nach dem Kauf oeber das Kontaktformular eingereicht werden.</li>
          <li>Bereits versandte Bestellungen kuennen nicht storniert, aber gemaess unserer Roeckgaberichtlinie zuroeckgegeben werden.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Sicherheit & Betrugspraevention</h3>
      <div className={styled.policy_block_children}>
        <ul className={styled.children_block_ul}>
          <li>3D Secure 2.0-Authentifizierung foer Kartenzahlungen.</li>
          <li>AVS-Proefungen: Die Rechnungsadresse muss mit den Kartendaten oebereinstimmen.</li>
          <li>Verdaechtige Aktivitaeten kuennen zum Schutz Ihrer Bestellung zu deren Einbehaltung oder Stornierung foehren.</li>
        </ul>
      </div>

      <h3 className={styled.policy_title}>Haeufige Probleme</h3>
      <div className={styled.policy_block_children}>
        <p><strong>Luesungen foer „Zahlung abgelehnt“:</strong></p>
        <ul className={styled.children_block_ul}>
          <li>Stellen Sie sicher, dass Ihre Kartendetails (Nummer, CVV, Ablaufdatum) korrekt sind.</li>
          <li>Kontaktieren Sie Ihre Bank, um internationale Transaktionen zu bestaetigen.</li>
          <li>Versuchen Sie eine alternative Zahlungsmethode, z. B. PayPal.</li>
        </ul>

        <p><strong>Ausstehende Abbuchungen:</strong> Vorautorisierungen kuennen 1–5 Tage auf Ihrem Kontoauszug erscheinen, sind aber keine endgoeltigen Abbuchungen.</p>
      </div>

      <h3 className={styled.policy_title}>Kontakt</h3>
      <div className={styled.policy_block_children}>
        <p>
            <a href="mailto:support@gamebasket.de">📧 support@gamebasket.de</a><br/>
            <a href="tel:+491709182736">📞 +49 170 9182736</a>
        </p>
      </div>
    </section>
  );
}

export default Zahlungsrichtlinie;
