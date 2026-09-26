import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Privacy e Cookie',
  description: 'Informativa sulla privacy e sull\'uso dei cookie di CinemaBit.'
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <section className="page-head">
        <div className="wrap">
          <h1>Privacy e Cookie</h1>
          <p>Come CinemaBit tratta i dati e usa i cookie, in trasparenza.</p>
        </div>
      </section>
      <div className="man-body">
        <h2>Titolare del trattamento</h2>
        <p>Il titolare del trattamento dei dati raccolti tramite questo sito è il responsabile di CinemaBit. Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere all'indirizzo di contatto indicato in fondo alla pagina.</p>

        <h2>Quali dati raccogliamo</h2>
        <p>CinemaBit non richiede la registrazione e non raccoglie dati personali identificativi in modo diretto. Se acconsenti, utilizziamo strumenti di statistica anonima (Google Analytics 4) per capire quante persone visitano il sito, da quali pagine e attraverso quali canali, al solo scopo di migliorare i contenuti e l'esperienza di navigazione.</p>

        <h2>Cookie utilizzati</h2>
        <p><strong>Cookie tecnici:</strong> necessari al funzionamento del sito e alla memorizzazione delle tue preferenze (ad esempio la scelta sul consenso ai cookie). Non richiedono consenso.</p>
        <p><strong>Cookie di statistica (Google Analytics):</strong> vengono attivati solo dopo il tuo consenso esplicito tramite il banner. Servono a raccogliere dati aggregati e anonimi sull'uso del sito. Se rifiuti, questi cookie non vengono installati e Google Analytics non viene caricato.</p>

        <h2>Google Analytics</h2>
        <p>Utilizziamo Google Analytics 4, un servizio di analisi fornito da Google. I dati raccolti sono trattati in forma aggregata e ci aiutano a comprendere l'andamento del sito. Puoi consultare l'informativa di Google e le modalità di gestione dei dati sul sito di Google.</p>

        <h2>Link di affiliazione</h2>
        <p>CinemaBit partecipa al Programma Affiliazione Amazon e ad altri programmi di affiliazione: alcuni link presenti sul sito possono generare una commissione, senza alcun costo aggiuntivo per te. Cliccando su questi link potresti essere reindirizzato a siti terzi (come Amazon o le piattaforme di streaming) che applicano le proprie informative sulla privacy.</p>

        <h2>I tuoi diritti</h2>
        <p>In base al Regolamento Europeo GDPR hai diritto ad accedere ai tuoi dati, chiederne la rettifica o la cancellazione, opporti al trattamento e revocare il consenso in qualsiasi momento. Puoi modificare la tua scelta sui cookie cancellando i dati del sito dal tuo browser: al successivo accesso ti verrà nuovamente chiesto il consenso.</p>

        <h2>Contatti</h2>
        <p>Per esercitare i tuoi diritti o per qualsiasi domanda sul trattamento dei dati, puoi contattare il titolare all'indirizzo email indicato nel sito. Questa informativa può essere aggiornata: ti invitiamo a consultarla periodicamente.</p>
      </div>
      <SiteFooter />
    </>
  );
}
