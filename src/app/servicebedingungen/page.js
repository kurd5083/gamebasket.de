import React from 'react';
import styled from '@styles/Policy.module.scss';

const Servicebedingungen = () => {
  return (
    <section className={styled.policy_container}>
      <h2 className={styled.policy_head}>Allgemeine Geschäftsbedingungen (AGB)</h2>

      <div className={styled.policy_block}>
        <p>Willkommen bei gamebasket.de! Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung unserer Website und den Erwerb unserer Produkte. Durch den Zugriff auf unsere Website oder den Kauf unserer Produkte erklären Sie sich mit diesen Bedingungen einverstanden.</p>
      </div>

      <h3 className={styled.policy_title}>1. Geltungsbereich und Anbieter</h3>
      <div className={styled.policy_block}>
        <p>Diese AGB gelten für alle Geschäftsbeziehungen zwischen der gamebasket.de (im Folgenden „wir“ oder „Anbieter“) und unseren Kunden (im Folgenden „Sie“ oder „Kunde“). Betreiber der Website und Anbieter der Dienstleistungen ist gamebasket.de mit Sitz in Deutschland.</p>
        <p>Unser Online-Shop wird auf der Plattform Shopify betrieben, die uns die technische Infrastruktur für den E-Commerce bereitstellt.</p>
      </div>

      <h3 className={styled.policy_title}>2. Vertragsschluss und Nutzungsvoraussetzungen</h3>
      <div className={styled.policy_block}>
        <p>Sie bestätigen, dass Sie das 18. Lebensjahr vollendet haben oder die Zustimmung eines Erziehungsberechtigten besitzen. Minderjährige dürfen nur mit Zustimmung der gesetzlichen Vertreter bestellen.</p>
        <p>Die Darstellung unserer Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum). Mit Absenden der Bestellung geben Sie ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Die Annahme erfolgt durch unsere Auftragsbestätigung per E-Mail.</p>
        <p className={styled.highlight}>Für digitale Spiele: Mit dem Download oder der Aktivierung des Spiels erklären Sie sich damit einverstanden, dass Ihr Widerrufsrecht erlischt, sofern Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist mit der Vertragserfüllung beginnen.</p>
      </div>

      <h3 className={styled.policy_title}>3. Preise und Zahlungsbedingungen</h3>
      <div className={styled.policy_block}>
        <p>Alle Preise verstehen sich als Endpreise in Euro und enthalten die gesetzliche Mehrwertsteuer. Versandkosten werden klar ausgewiesen.</p>
        <p>Wir behalten uns das Recht vor, Preise jederzeit anzupassen. Für bereits bestellte Produkte gelten die zum Zeitpunkt der Bestellung angegebenen Preise.</p>
        <p>Akzeptierte Zahlungsmethoden werden im Bestellprozess angezeigt. Bei Vorkasse erfolgt die Lieferung nach Zahlungseingang.</p>
      </div>

      <h3 className={styled.policy_title}>4. Lieferung und digitale Produkte</h3>
      <div className={styled.policy_block}>
        <p>Physische Produkte werden an die angegebene Lieferadresse versendet. Die Lieferzeit beträgt in der Regel 3–5 Werktage nach Zahlungseingang, sofern verfügbar.</p>
        <p className={styled.highlight}>Digitale Spiele: Sie erhalten den Download-Link oder Aktivierungsschlüssel per E-Mail innerhalb von 24 Stunden nach Zahlungseingang.</p>
        <p>Die Gefahr des zufälligen Untergangs oder der Verschlechterung physischer Ware geht mit Übergabe an den Versanddienstleister auf Sie über. Bei Kaufleuten gilt dies auch, wenn wir die Versendung übernommen haben.</p>
      </div>

      <h3 className={styled.policy_title}>5. Eigentumsvorbehalt</h3>
      <div className={styled.policy_block}>
        <p>Bis zur vollständigen Bezahlung bleibt die Ware unser Eigentum.</p>
        <p className={styled.highlight}>Bei digitalen Produkten erwerben Sie lediglich ein Nutzungsrecht. Das Eigentum an der Software verbleibt bei uns.</p>
      </div>

      <h3 className={styled.policy_title}>6. Widerrufsrecht</h3>
      <div className={styled.policy_block}>
        <p>Verbraucher haben grundsätzlich ein 14-tägiges Widerrufsrecht. Details entnehmen Sie bitte unserer separaten Widerrufsbelehrung.</p>
        <p className={styled.highlight}>Bei digitalen Produkten erlischt das Widerrufsrecht, wenn Sie dem sofortigen Beginn der Vertragserfüllung zugestimmt haben (§ 356 Abs. 5 BGB).</p>
      </div>

      <h3 className={styled.policy_title}>7. Gewährleistung und Haftung</h3>
      <div className={styled.policy_block}>
        <p>Es gelten die gesetzlichen Gewährleistungsbestimmungen. Zusätzliche Garantien werden gesondert angegeben.</p>
        <p className={styled.highlight}>Für digitale Spiele haften wir nur für die Bereitstellung eines funktionierenden Aktivierungsschlüssels. Wir übernehmen keine Gewähr für Systemkompatibilität oder Serververfügbarkeit.</p>
        <p>Für Vorsatz und grobe Fahrlässigkeit haften wir unbeschränkt. Bei leichter Fahrlässigkeit haften wir nur für Verletzung wesentlicher Vertragspflichten, begrenzt auf den typischerweise vorhersehbaren Schaden.</p>
      </div>

      <h3 className={styled.policy_title}>8. Nutzung der Website</h3>
      <div className={styled.policy_block}>
        <p>Sie verpflichten sich, die Website nicht für illegale Handlungen, Schadsoftware oder unerlaubtes Scraping zu nutzen.</p>
        <p>Verstöße können zu Zugangsbeschränkungen oder Sperrungen führen.</p>
      </div>

      <h3 className={styled.policy_title}>9. Geistiges Eigentum</h3>
      <div className={styled.policy_block}>
        <p>Inhalte der Website (Texte, Bilder, Logos) sind urheberrechtlich geschützt. Nutzung nur mit ausdrücklicher Zustimmung.</p>
        <p className={styled.highlight}>Digitale Spiele unterliegen dem Urheberrecht. Sie erwerben lediglich ein Nutzungsrecht für den persönlichen Gebrauch.</p>
      </div>

      <h3 className={styled.policy_title}>10. Datenschutz</h3>
      <div className={styled.policy_block}>
        <p>Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer <a href="/datenschutzerklärung">Datenschutzerklärung</a> (DSGVO-konform).</p>
      </div>

      <h3 className={styled.policy_title}>11. Haftungsausschluss</h3>
      <div className={styled.policy_block}>
        <p>Wir übernehmen keine Haftung für die ständige Verfügbarkeit der Website. Vorübergehende Ausfälle sind möglich.</p>
        <p>Für Inhalte externer Websites übernehmen wir keine Verantwortung.</p>
      </div>

      <h3 className={styled.policy_title}>12. Schlussbestimmungen</h3>
      <div className={styled.policy_block}>
        <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist unser Geschäftssitz, soweit Sie Verbraucher sind.</p>
        <p>Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
      </div>

      <h3 className={styled.policy_title}>13. Änderungen der AGB</h3>
      <div className={styled.policy_block}>
        <p>Wir behalten uns das Recht vor, die AGB zu ändern. Änderungen werden vor Inkrafttreten mitgeteilt. Widersprechen Sie nicht innerhalb von 4 Wochen, gelten die Änderungen als akzeptiert.</p>
      </div>
    </section>
  );
};

export default Servicebedingungen;
