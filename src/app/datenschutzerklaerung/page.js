import styled from '@styles/Policy.module.scss';

const Datenschutzerklaerung = () => {
	return (
		<section className={styled.policy_container}>
			<h2 className={styled.policy_head}>Datenschutzerklaerung</h2>

			<div className={styled.policy_block}>
				<p>Diese Datenschutzerklaerung erlaeutert, wie https://GameBasket.de (die „Website“ oder „wir“) Ihre personenbezogenen Daten sammelt, verwendet und weitergibt, wenn Sie unsere Website besuchen oder Produkte kaufen.</p>
			</div>

			<h3 className={styled.policy_title}>Erhebung personenbezogener Daten</h3>
			<div className={styled.policy_block_children}>
				<p>Beim Besuch unserer Website erfassen wir bestimmte Informationen oeber Ihr Geraet und Ihre Interaktion mit der Website, sowie Informationen, die foer die Abwicklung Ihrer Bestellungen erforderlich sind. Zusaetzliche Daten kuennen erfasst werden, wenn Sie den Kundensupport kontaktieren. Alle Informationen, die eine Person eindeutig identifizieren kuennen, werden als „personenbezogene Daten“ bezeichnet.</p>

				<div>
					<h4 className={styled.children_title}>Geraeteinformationen</h4>
					<ul className={styled.children_block_ul}>
						<li>Beispiele erhobener Daten:</li>
						<li>Browsertyp und -version, IP-Adresse, Zeitzone, Cookies, besuchte Seiten oder Produkte, Suchbegriffe, Interaktionen mit der Website.</li>
						<li>Zweck:</li>
						<li>Sicherstellung der Website-Funktionalitaet, Analyse des Nutzerverhaltens und Optimierung der Website.</li>
						<li>Quelle:</li>
						<li>Automatisch oeber Cookies, Protokolldateien, Web-Beacons, Tags oder Pixel erhoben.</li>
						<li>Weitergabe:</li>
						<li>Mit Shopify und Dritten wie Facebook oder Instagram foer gezielte Werbung.</li>
					</ul>
				</div>

				<div>
					<h4 className={styled.children_title}>Bestellinformationen</h4>
					<ul className={styled.children_block_ul}>
						<li>Beispiele erhobener Daten:</li>
						<li>Name, Rechnungs- und Lieferadresse, Zahlungsinformationen, E-Mail-Adresse, Telefonnummer.</li>
						<li>Zweck:</li>
						<li>Abwicklung von Bestellungen, Zahlungsabwicklung, Versand, Rechnungsstellung, Kommunikation, Betrugsproefung, personalisierte Angebote und Werbung.</li>
						<li>Quelle:</li>
						<li>Von Ihnen bereitgestellt.</li>
						<li>Weitergabe:</li>
						<li>Mit Shopify und Dritten wie Facebook oder Instagram foer Marketingzwecke.</li>
					</ul>
				</div>

				<div>
					<h4 className={styled.children_title}>Kundensupport</h4>
					<ul className={styled.children_block_ul}>
						<li>Beispiele erhobener Daten:</li>
						<li>Name, E-Mail, Liefer- und Rechnungsadresse, Telefonnummer.</li>
						<li>Zweck:</li>
						<li>Bearbeitung Ihrer Anfragen und Unterstoetzung.</li>
						<li>Quelle:</li>
						<li>Von Ihnen bereitgestellt.</li>
						<li>Weitergabe:</li>
						<li>Shopify und Dritten nur foer Marketing bei ausdroecklicher Nutzung.</li>
					</ul>
				</div>
			</div>

			<h3 className={styled.policy_title}>Minderjaehrige</h3>
			<div className={styled.policy_block}>
				<p>Unsere Website richtet sich nicht an Personen unter 18 Jahren. Wir erfassen keine wissentlich personenbezogenen Daten von Kindern. Eltern kuennen uns kontaktieren, um versehentlich erfasste Daten von Minderjaehrigen lueschen zu lassen.</p>
			</div>

			<h3 className={styled.policy_title}>Weitergabe personenbezogener Daten</h3>
			<div className={styled.policy_block}>
				<p>Wir teilen Ihre Daten nur mit Dienstleistern, die uns bei der Bereitstellung unserer Dienste unterstoetzen:</p>
				<p>Shopify foer den Betrieb unseres Shops.</p>
				<p>Facebook und Instagram foer Marketingzwecke. Nutzer kuennen ihre Daten hier abmelden: Facebook-Hilfe.</p>
				<p>Wir geben Daten ggf. an Behuerden oder Dritte weiter, wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte dient.</p>
			</div>

			<h3 className={styled.policy_title}>Verhaltensbezogene Werbung</h3>
			<div className={styled.policy_block_children}>
				<p>Wir nutzen Ihre Daten, um relevante Werbung oder Mitteilungen zu liefern:</p>
				<p>Google Analytics: Analyse der Website-Nutzung (Opt-out verfoegbar)</p>
				<p>Facebook & Instagram Ads: Abmeldung mueglich</p>
				<p>Allgemeines Opt-out: Network Advertising Initiative, DAA</p>
			</div>

			<h3 className={styled.policy_title}>Verwendung personenbezogener Daten</h3>
			<div className={styled.policy_block_children}>
				<p>Wir verwenden personenbezogene Daten foer:</p>
				<ul className={styled.children_block_ul}>
					<li>Verkauf von Produkten</li>
					<li>Zahlungsabwicklung</li>
					<li>Versand und Erfoellung von Bestellungen</li>
					<li>Informationen zu neuen Produkten und Angeboten</li>
				</ul>

				<div>
					<h4 className={styled.children_title}>Rechtsgrundlage (DSGVO)</h4>
					<p>Foer Nutzer aus dem EWR verarbeiten wir Daten basierend auf:</p>
					<ul className={styled.children_block_ul}>
						<li>Einwilligung</li>
						<li>Vertragserfoellung</li>
						<li>Gesetzlichen Pflichten</li>
						<li>Schutz lebenswichtiger Interessen</li>
						<li>Aufgaben im ueffentlichen Interesse</li>
						<li>Berechtigten Interessen, soweit Ihre Rechte nicht oeberwiegen</li>
					</ul>
				</div>

				<div>
					<h4 className={styled.children_title}>Aufbewahrung</h4>
					<p>Personenbezogene Daten von Bestellungen werden gespeichert, bis eine Lueschung angefordert wird.</p>
				</div>

				<div>
					<h4 className={styled.children_title}>Automatisierte Entscheidungsfindung</h4>
					<p>Wir foehren keine vollautomatischen Entscheidungen mit rechtlichen oder erheblichen Auswirkungen durch. Shopify nutzt jedoch zeitlich begrenzte automatisierte Proefungen zur Betrugspraevention, z. B.:</p>
					<ul className={styled.children_block_ul}>
						<li>Voroebergehende Sperrung von IP-Adressen bei mehrfach fehlgeschlagenen Transaktionen</li>
						<li>Voroebergehende Sperre von Kreditkarten, die mit blockierten IPs verknoepft sind</li>
					</ul>
				</div>
			</div>

			<h3 className={styled.policy_title}>Ihre Rechte</h3>
			<div className={styled.policy_block_children}>
				<p>Foer Nutzer aus dem EWR:</p>
				<ul className={styled.children_block_ul}>
					<li>Zugriff auf gespeicherte personenbezogene Daten</li>
					<li>Datenoebertragung an einen anderen Anbieter</li>
					<li>Berichtigung, Aktualisierung oder Lueschung von Daten</li>
				</ul>
				<p>Foer Datenoebertragungen ausserhalb Europas siehe Shopifys DSGVO-Konformitaet.</p>
			</div>

			<h3 className={styled.policy_title}>Cookies</h3>
			<div className={styled.policy_block_children}>
				<p>Wir verwenden Cookies zur Funktionsfaehigkeit und Analyse unserer Website:</p>

				<div>
					<h4 className={styled.children_title}>Funktions-Cookies</h4>
					<table className={styled.children_block_table}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Funktion</th>
							</tr>
						</thead>
						<tbody>
							<tr><td>_ab</td><td>Admin-Zugriff</td></tr>
							<tr><td>_secure_session_id</td><td>Navigation</td></tr>
							<tr><td>cart</td><td>Warenkorb</td></tr>
							<tr><td>cart_sig, cart_ts, checkout_token, secret</td><td>Checkout</td></tr>
							<tr><td>secure_customer_sig, storefront_digest</td><td>Kundenlogin</td></tr>
							<tr><td>_shopify_u</td><td>Kundenkonto-Aktualisierung</td></tr>
						</tbody>
					</table>
				</div>

				<div>
					<h4 className={styled.children_title}>Analyse-Cookies</h4>
					<table className={styled.children_block_table}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Funktion</th>
							</tr>
						</thead>
						<tbody>
							<tr><td>_tracking_consent</td><td>Tracking-Einstellungen</td></tr>
							<tr><td>_landing_page, _orig_referrer</td><td>Landingpages verfolgen</td></tr>
							<tr><td>_s, _shopify_fs, _shopify_s, _shopify_sa_p, _shopify_sa_t, _shopify_y, _y</td><td>Shopify-Analysen</td></tr>
						</tbody>
					</table>
				</div>

				<p>Die meisten Cookies haben eine Lebensdauer von 30 Minuten bis 2 Jahren. Sie kuennen Cookies oeber Ihre Browsereinstellungen verwalten.</p>

				<div>
					<h4 className={styled.children_title}>Do Not Track</h4>
					<p>Wir beroecksichtigen Do-Not-Track-Signale nicht, da kein einheitlicher Standard existiert.</p>
				</div>
			</div>

			<h3 className={styled.policy_title}>Aenderungen</h3>
			<div className={styled.policy_block}>
				<p>Wir passen diese Datenschutzerklaerung gelegentlich an, um gesetzliche Aenderungen oder Anpassungen unserer Services zu beroecksichtigen.</p>
				<p>Zuletzt aktualisiert: 27. Maerz 2024</p>
				<p>Bei Unzufriedenheit kuennen Sie sich an die zustaendige Datenschutzaufsichtsbehuerde wenden.</p>
			</div>
		</section>
	);
};

export default Datenschutzerklaerung;
