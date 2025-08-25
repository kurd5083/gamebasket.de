import styled from '@styles/Policy.module.scss';

const Nutzungsbedingungen = () => {
  return (
    <section className={styled.policy_container}>
      <h2 className={styled.policy_head}>Allgemeine Geschaeftsbedingungen</h2>

      <div className={styled.policy_block}>
        <p>Willkommen bei gamebasket.de! Diese Allgemeinen Geschaeftsbedingungen regeln die Nutzung unserer Website und den Erwerb unserer Produkte. Durch den Zugriff auf unsere Website oder den Kauf unserer Produkte erklaeren Sie sich mit diesen Bedingungen einverstanden.</p>
      </div>

      <h3 className={styled.policy_title}>1. Geltungsbereich und Anbieter</h3>
      <div className={styled.policy_block}>
        <p>Diese AGB gelten foer alle Geschaeftsbeziehungen zwischen der gamebasket.de (im Folgenden „wir“ oder „Anbieter“) und unseren Kunden (im Folgenden „Sie“ oder „Kunde“). Betreiber der Website und Anbieter der Dienstleistungen ist gamebasket.de mit Sitz in Deutschland.</p>
        <p>Unser Online-Shop wird auf der Plattform Shopify betrieben, die uns die technische Infrastruktur foer den E-Commerce bereitstellt.</p>
      </div>

      <h3 className={styled.policy_title}>2. Vertragsschluss und Nutzungsvoraussetzungen</h3>
      <div className={styled.policy_block}>
        <p>Sie bestaetigen, dass Sie das 18. Lebensjahr vollendet haben oder die Zustimmung eines Erziehungsberechtigten besitzen. Minderjaehrige doerfen nur mit Zustimmung der gesetzlichen Vertreter bestellen.</p>
        <p>Die Darstellung unserer Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum). Mit Absenden der Bestellung geben Sie ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Die Annahme erfolgt durch unsere Auftragsbestaetigung per E-Mail.</p>
        <p className={styled.highlight}>Foer digitale Spiele: Mit dem Download oder der Aktivierung des Spiels erklaeren Sie sich damit einverstanden, dass Ihr Widerrufsrecht erlischt, sofern Sie ausdroecklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist mit der Vertragserfoellung beginnen.</p>
      </div>

      <h3 className={styled.policy_title}>3. Preise und Zahlungsbedingungen</h3>
      <div className={styled.policy_block}>
        <p>Alle Preise verstehen sich als Endpreise in Euro und enthalten die gesetzliche Mehrwertsteuer. Versandkosten werden klar ausgewiesen.</p>
        <p>Wir behalten uns das Recht vor, Preise jederzeit anzupassen. Foer bereits bestellte Produkte gelten die zum Zeitpunkt der Bestellung angegebenen Preise.</p>
        <p>Akzeptierte Zahlungsmethoden werden im Bestellprozess angezeigt. Bei Vorkasse erfolgt die Lieferung nach Zahlungseingang.</p>
      </div>

      <h3 className={styled.policy_title}>4. Lieferung und digitale Produkte</h3>
      <div className={styled.policy_block}>
        <p>Physische Produkte werden an die angegebene Lieferadresse versendet. Die Lieferzeit betraegt in der Regel 3–5 Werktage nach Zahlungseingang, sofern verfoegbar.</p>
        <p className={styled.highlight}>Digitale Spiele: Sie erhalten den Download-Link oder Aktivierungsschloessel per E-Mail innerhalb von 24 Stunden nach Zahlungseingang.</p>
        <p>Die Gefahr des zufaelligen Untergangs oder der Verschlechterung physischer Ware geht mit Oebergabe an den Versanddienstleister auf Sie oeber. Bei Kaufleuten gilt dies auch, wenn wir die Versendung oebernommen haben.</p>
      </div>

      <h3 className={styled.policy_title}>5. Eigentumsvorbehalt</h3>
      <div className={styled.policy_block}>
        <p>Bis zur vollstaendigen Bezahlung bleibt die Ware unser Eigentum.</p>
        <p className={styled.highlight}>Bei digitalen Produkten erwerben Sie lediglich ein Nutzungsrecht. Das Eigentum an der Software verbleibt bei uns.</p>
      </div>

      <h3 className={styled.policy_title}>6. Widerrufsrecht</h3>
      <div className={styled.policy_block}>
        <p>Verbraucher haben grundsaetzlich ein 14-taegiges Widerrufsrecht. Details entnehmen Sie bitte unserer separaten Widerrufsbelehrung.</p>
        <p className={styled.highlight}>Bei digitalen Produkten erlischt das Widerrufsrecht, wenn Sie dem sofortigen Beginn der Vertragserfoellung zugestimmt haben (§ 356 Abs. 5 BGB).</p>
      </div>

      <h3 className={styled.policy_title}>7. Gewaehrleistung und Haftung</h3>
      <div className={styled.policy_block}>
        <p>Es gelten die gesetzlichen Gewaehrleistungsbestimmungen. Zusaetzliche Garantien werden gesondert angegeben.</p>
        <p className={styled.highlight}>Foer digitale Spiele haften wir nur foer die Bereitstellung eines funktionierenden Aktivierungsschloessels. Wir oebernehmen keine Gewaehr foer Systemkompatibilitaet oder Serververfoegbarkeit.</p>
        <p>Foer Vorsatz und grobe Fahrlaessigkeit haften wir unbeschraenkt. Bei leichter Fahrlaessigkeit haften wir nur foer Verletzung wesentlicher Vertragspflichten, begrenzt auf den typischerweise vorhersehbaren Schaden.</p>
      </div>

      <h3 className={styled.policy_title}>8. Nutzung der Website</h3>
      <div className={styled.policy_block}>
        <p>Sie verpflichten sich, die Website nicht foer illegale Handlungen, Schadsoftware oder unerlaubtes Scraping zu nutzen.</p>
        <p>Verstuesse kuennen zu Zugangsbeschraenkungen oder Sperrungen foehren.</p>
      </div>

      <h3 className={styled.policy_title}>9. Geistiges Eigentum</h3>
      <div className={styled.policy_block}>
        <p>Inhalte der Website (Texte, Bilder, Logos) sind urheberrechtlich geschoetzt. Nutzung nur mit ausdroecklicher Zustimmung.</p>
        <p className={styled.highlight}>Digitale Spiele unterliegen dem Urheberrecht. Sie erwerben lediglich ein Nutzungsrecht foer den persuenlichen Gebrauch.</p>
      </div>

      <h3 className={styled.policy_title}>10. Datenschutz</h3>
      <div className={styled.policy_block}>
        <p>Die Verarbeitung personenbezogener Daten erfolgt gemaess unserer <a href="/datenschutzerklaerung">Datenschutzerklaerung</a> (DSGVO-konform).</p>
      </div>

      <h3 className={styled.policy_title}>11. Haftungsausschluss</h3>
      <div className={styled.policy_block}>
        <p>Wir oebernehmen keine Haftung foer die staendige Verfoegbarkeit der Website. Voroebergehende Ausfaelle sind mueglich.</p>
        <p>Foer Inhalte externer Websites oebernehmen wir keine Verantwortung.</p>
      </div>

      <h3 className={styled.policy_title}>12. Schlussbestimmungen</h3>
      <div className={styled.policy_block}>
        <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist unser Geschaeftssitz, soweit Sie Verbraucher sind.</p>
        <p>Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der oebrigen Bestimmungen unberoehrt.</p>
      </div>

      <h3 className={styled.policy_title}>13. Aenderungen der AGB</h3>
      <div className={styled.policy_block}>
        <p>Wir behalten uns das Recht vor, die AGB zu aendern. Aenderungen werden vor Inkrafttreten mitgeteilt. Widersprechen Sie nicht innerhalb von 4 Wochen, gelten die Aenderungen als akzeptiert.</p>
      </div>
    </section>
  );
};

export default Nutzungsbedingungen;
