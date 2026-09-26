// ============================================================
//  DATABASE FILM DI CINEMABIT
//  Per aggiungere un film: copia un blocco { ... } e compilalo.
//  Lo "slug" diventa l'indirizzo: /film/<slug>
//  L'"imdb" serve per caricare la locandina ufficiale via OMDb.
// ============================================================

export const films = [
  {
    slug: 'wonder',
    titolo: 'Wonder',
    anno: 2017,
    durata: '113 min',
    genere: 'Drammatico / Famiglia',
    regia: 'Stephen Chbosky',
    imdb: 'tt2543472',
    colore: 'wonder',
    categorie: ['Famiglia', 'Buoni sentimenti', 'Crescita interiore'],
    frequenza: 'Alta',
    tagline: 'Abbiamo dentro di noi, come esseri umani, non solo la capacità di essere gentili, ma la scelta reale della gentilezza.',
    chips: ['Buoni sentimenti', 'Famiglia', 'Gentilezza', 'Tratto da un libro'],
    dove: [
      { nome: 'Prime Video', tipo: 'streaming' },
      { nome: 'Netflix', tipo: 'streaming' }
    ],
    storia: [
      'Wonder racconta la coinvolgente storia di August Pullman, per tutti Auggie: un bambino di dieci anni nato con una rara malformazione del volto — la sindrome di Treacher Collins — che lo ha portato ad affrontare ventisette interventi e a non frequentare mai la scuola. Ora, per la prima volta, entra in una classe di prima media, l\'ambiente più difficile e temuto.',
      'Come sarà accolto dai compagni e dagli insegnanti? Chi sarà suo amico? L\'amore della sua straordinaria famiglia, una grande dose di coraggio e la sua travolgente gentilezza lo aiuteranno a trovare il suo posto nel mondo — e nel cuore di chi gli sta intorno.'
    ],
    frasi: [
      { testo: 'Tutti nel mondo, almeno una volta nella vita, dovrebbero ricevere una standing ovation.', chi: 'Auggie' },
      { testo: 'Quando puoi scegliere tra avere ragione o essere gentile, scegli di essere gentile.', chi: 'Il precetto di Mr. Browne' }
    ],
    canzoni: [],
    frequenzaTesto: 'Una storia che eleva: esci dalla visione più aperto, più gentile, più presente.',
    perche: 'Insegna ai bambini — e ricorda agli adulti — che le nostre azioni verso gli altri contano più dell\'aspetto. Una storia sull\'empatia raccontata con leggerezza, con tante cose di cui parlare dopo.',
    curiosita: 'Il regista Stephen Chbosky accettò il progetto solo dopo aver letto il libro: lo definì "il romanzo di formazione di questa generazione". Jacob Tremblay, il piccolo Auggie, amò il personaggio anche per la sua passione per Guerre Stellari — che ispira il celebre casco da astronauta.',
    cast: [
      { ruolo: 'Isabel', attore: 'Julia Roberts' },
      { ruolo: 'Auggie', attore: 'Jacob Tremblay' },
      { ruolo: 'Nate', attore: 'Owen Wilson' },
      { ruolo: 'Mr. Tushman', attore: 'Mandy Patinkin' }
    ],
    scheda: [
      ['Regia', 'Stephen Chbosky'],
      ['Tratto da', 'Romanzo di R.J. Palacio'],
      ['Uscita Italia', '21 dic 2017'],
      ['Durata', '113 min'],
      ['Genere', 'Drammatico / Famiglia']
    ]
  },

  {
    slug: 'kung-fu-panda',
    titolo: 'Kung Fu Panda',
    anno: 2008,
    durata: '92 min',
    genere: 'Animazione / Famiglia',
    regia: 'DreamWorks',
    imdb: 'tt0441773',
    colore: 'panda',
    categorie: ['Animazione', 'Famiglia', 'Crescita interiore'],
    frequenza: 'Alta',
    tagline: 'Ieri è storia, domani è un mistero, ma oggi è un dono: per questo si chiama presente.',
    chips: ['Crescita interiore', 'Animazione', 'Presenza', 'Autostima'],
    dove: [
      { nome: 'Prime Video', tipo: 'streaming' },
      { nome: 'NOW', tipo: 'streaming' }
    ],
    storia: [
      'Po è un panda goffo e sognatore, appassionato di kung fu ma condannato — così sembra — a lavorare nel ristorante di noodle di suo padre. Quando viene inaspettatamente scelto come il leggendario Guerriero Dragone, nessuno crede in lui: né i maestri, né i guerrieri, né lui stesso. Eppure il vecchio maestro Oogway aveva visto giusto.',
      'Tra allenamenti impossibili e dubbi su di sé, Po scoprirà che il vero segreto non è in una pergamena magica, ma dentro di lui — nel credere di essere speciale. Una favola sull\'autostima, la presenza e il destino, capace di parlare ai bambini e agli adulti con la stessa profondità.'
    ],
    frasi: [
      { testo: 'Spesso ci si imbatte nel proprio destino sulla strada presa per evitarlo.', chi: 'Maestro Oogway' },
      { testo: 'La tua mente è come quest\'acqua, amico mio: quando viene agitata diventa difficile vedere. Ma se le permetti di calmarsi, la risposta ti appare chiara.', chi: 'Maestro Oogway' },
      { testo: 'Ieri è storia, domani è un mistero, ma oggi è un dono: per questo si chiama presente.', chi: 'Maestro Oogway' },
      { testo: 'Se sei disposto a guidarlo, a nutrirlo, a credere in lui… tu devi solamente credere.', chi: 'Maestro Oogway' },
      { testo: 'Il caso non esiste.', chi: 'Maestro Oogway' },
      { testo: 'Il marchio di un vero eroe è l\'umiltà.', chi: 'Maestro Shifu' },
      { testo: 'L\'ingrediente segreto è… niente. Per rendere una cosa speciale devi solo credere che sia speciale.', chi: 'Il padre di Po' }
    ],
    canzoni: [
      { titolo: 'Kung Fu Fighting', artista: 'Cee-Lo Green & Jack Black — dai titoli di coda' },
      { titolo: 'Oogway Ascends', artista: 'Hans Zimmer & John Powell — colonna sonora' }
    ],
    frequenzaTesto: 'Sotto la comicità, una vera lezione di presenza e fiducia in sé. Un film che eleva mentre diverte.',
    perche: 'Dietro le risate c\'è una saggezza sorprendente: vivere il presente, credere in sé stessi, accettarsi. Le frasi del maestro Oogway sono piccole perle di consapevolezza che i bambini ricordano e gli adulti riscoprono.',
    curiosita: 'La celebre frase "oggi è un dono, per questo si chiama presente" gioca su un doppio senso che in inglese è ancora più forte: present significa sia "presente" sia "regalo". È diventata una delle citazioni più amate del cinema d\'animazione.',
    cast: [
      { ruolo: 'Po', attore: 'Jack Black' },
      { ruolo: 'Shifu', attore: 'Dustin Hoffman' },
      { ruolo: 'Tigre', attore: 'Angelina Jolie' },
      { ruolo: 'Oogway', attore: 'Randall Duk Kim' }
    ],
    scheda: [
      ['Studio', 'DreamWorks'],
      ['Anno', '2008'],
      ['Durata', '92 min'],
      ['Genere', 'Animazione / Famiglia']
    ]
  },

  {
    slug: 'inside-out',
    titolo: 'Inside Out',
    anno: 2015,
    durata: '95 min',
    genere: 'Animazione / Famiglia',
    regia: 'Pete Docter (Pixar)',
    imdb: 'tt2096673',
    colore: 'io',
    categorie: ['Animazione', 'Famiglia', 'Crescita interiore'],
    frequenza: 'Alta',
    tagline: 'Non puoi essere sempre felice. Anche la tristezza ha il suo posto — e il suo valore.',
    chips: ['Emozioni', 'Crescita interiore', 'Animazione', 'Consapevolezza'],
    dove: [
      { nome: 'Disney+', tipo: 'streaming' }
    ],
    storia: [
      'Riley è una bambina di undici anni la cui vita viene sconvolta quando la famiglia si trasferisce a San Francisco. Ma la vera storia si svolge dentro la sua testa, nel "quartier generale" dove cinque emozioni — Gioia, Tristezza, Paura, Rabbia e Disgusto — governano il suo comportamento e custodiscono i suoi ricordi.',
      'Quando Gioia e Tristezza si perdono nei meandri della mente, Riley resta senza le sue emozioni-guida. È un viaggio poetico e sorprendente che insegna una verità profonda: per crescere davvero non basta essere felici, servono tutte le emozioni — anche quelle che vorremmo evitare.'
    ],
    frasi: [
      { testo: 'Piangere mi aiuta a rallentare e a riflettere sui problemi della vita.', chi: 'Tristezza' }
    ],
    canzoni: [
      { titolo: 'Bundle of Joy', artista: 'Michael Giacchino — tema principale' }
    ],
    frequenzaTesto: 'Un film che apre alla consapevolezza emotiva: dopo, capisci meglio te stesso e chi ti sta vicino.',
    perche: 'Dà un nome alle emozioni e insegna a bambini e adulti che la tristezza non è un nemico da nascondere, ma una parte necessaria della vita. Un piccolo capolavoro di educazione emotiva, che apre conversazioni importanti tra genitori e figli.',
    curiosita: 'Il regista Pete Docter ebbe l\'idea guardando la propria figlia crescere e diventare più riservata. Per costruire le cinque emozioni, la Pixar consultò psicologi esperti: la scelta di dare a Tristezza un ruolo centrale è ciò che rende il film così profondo.',
    cast: [
      { ruolo: 'Gioia', attore: 'Amy Poehler' },
      { ruolo: 'Tristezza', attore: 'Phyllis Smith' },
      { ruolo: 'Paura', attore: 'Bill Hader' },
      { ruolo: 'Rabbia', attore: 'Lewis Black' }
    ],
    scheda: [
      ['Regia', 'Pete Docter'],
      ['Studio', 'Pixar'],
      ['Anno', '2015'],
      ['Durata', '95 min'],
      ['Premi', 'Oscar Miglior film d\'animazione']
    ]
  },

  {
    slug: 'gli-eroi-del-natale',
    titolo: 'Gli eroi del Natale',
    anno: 2017,
    durata: '86 min',
    genere: 'Animazione / Famiglia',
    regia: 'Sony Pictures Animation',
    imdb: 'tt4587656',
    colore: 'star',
    categorie: ['Animazione', 'Natale', 'Valori e spirito', 'Famiglia'],
    frequenza: 'Alta',
    tagline: 'La più grande delle storie raccontata dai più piccoli dei protagonisti.',
    chips: ['Valori cristiani', 'Natale', 'Animazione', 'Fede e speranza'],
    dove: [
      { nome: 'Prime Video', tipo: 'streaming' },
      { nome: 'NOW', tipo: 'streaming' }
    ],
    storia: [
      'La storia della Natività raccontata da un punto di vista inedito: quello degli animali. Bo è un piccolo asino che sogna di sfuggire alla monotonia del mulino per una vita di avventure. Quando incrocia il cammino di Maria e Giuseppe, si ritrova — insieme a una simpatica pecora e a una colomba — protagonista involontario del viaggio più importante della storia.',
      'Tra amicizia, coraggio e un pizzico di ironia, Gli eroi del Natale racconta ai più piccoli il significato del Natale con delicatezza e calore, senza mai essere pesante: una favola che parla di fede, speranza e del valore di ogni creatura, anche la più umile.'
    ],
    frasi: [
      { testo: 'A volte le cose più grandi accadono ai più piccoli.', chi: 'Il messaggio del film' }
    ],
    canzoni: [
      { titolo: 'The Star', artista: 'Mariah Carey — canzone originale del film' },
      { titolo: 'Can You See', artista: 'Fifth Harmony — dalla colonna sonora' }
    ],
    frequenzaTesto: 'Un film che scalda il cuore e riporta al senso autentico del Natale. Perfetto per le feste in famiglia.',
    perche: 'Racconta la storia della Natività in modo accessibile e gioioso, adatto anche ai bambini più piccoli. Un modo dolce per parlare di fede e valori durante il periodo natalizio, senza prediche: solo una bella avventura piena di cuore.',
    curiosita: 'Il titolo originale è semplicemente The Star (La stella), riferimento alla stella di Betlemme che guida i protagonisti. Il film ha una colonna sonora natalizia con artisti come Mariah Carey, diventando un piccolo classico da rivedere ogni anno.',
    cast: [
      { ruolo: 'Genere', attore: 'Animazione' },
      { ruolo: 'Tema', attore: 'Natività' },
      { ruolo: 'Adatto a', attore: 'Tutta la famiglia' }
    ],
    scheda: [
      ['Titolo orig.', 'The Star'],
      ['Studio', 'Sony Animation'],
      ['Anno', '2017'],
      ['Durata', '86 min'],
      ['Genere', 'Animazione / Famiglia']
    ]
  },

  {
    slug: 'quando-cera-marnie',
    titolo: 'Quando c\'era Marnie',
    anno: 2014,
    durata: '103 min',
    genere: 'Animazione / Famiglia',
    regia: 'Hiromasa Yonebayashi (Studio Ghibli)',
    imdb: 'tt3398268',
    colore: 'marnie',
    categorie: ['Animazione', 'Crescita interiore'],
    frequenza: 'Alta',
    tagline: 'Ci sono cose che non si vedono con gli occhi, ma solo con il cuore.',
    chips: ['Guarigione interiore', 'Amicizia', 'Animazione', 'Ghibli'],
    dove: [
      { nome: 'In streaming', tipo: 'streaming' }
    ],
    storia: [
      'Anna è una ragazzina introversa e solitaria, che fatica a sentirsi parte del mondo. Mandata a passare l\'estate in un villaggio di mare da alcuni parenti, scopre una vecchia villa abbandonata sulla palude — e lì incontra Marnie, una misteriosa e luminosa ragazza che sembra vivere in un altro tempo.',
      'Tra le due nasce un\'amicizia intensa e speciale, che aiuterà Anna a guarire dalle sue ferite, a comprendere il proprio passato e ad aprirsi finalmente agli altri. Un film Ghibli delicatissimo sulla solitudine, il perdono e il senso di appartenenza, di rara bellezza poetica.'
    ],
    frasi: [
      { testo: 'Ti perdono. Ti ho sempre voluto bene.', chi: 'Marnie' }
    ],
    canzoni: [],
    frequenzaTesto: 'Un film che accompagna dolcemente verso la pace interiore: dopo, ci si sente più leggeri e più aperti.',
    perche: 'Affronta con delicatezza temi profondi — la solitudine, l\'accettazione di sé, il perdono — rendendoli accessibili anche ai più giovani. Un film che aiuta i ragazzi che si sentono "fuori dal cerchio" a sentirsi meno soli.',
    curiosita: 'Tratto dal romanzo inglese di Joan G. Robinson, è uno degli ultimi film prodotti dallo Studio Ghibli prima della pausa produttiva. La palude e la villa sono ispirate a paesaggi reali dell\'Hokkaido, e la colonna sonora malinconica è amatissima dai fan.',
    cast: [
      { ruolo: 'Cuore', attore: 'Amicizia' },
      { ruolo: 'Crescita', attore: 'Guarigione' },
      { ruolo: 'Valore', attore: 'Perdono' }
    ],
    scheda: [
      ['Regia', 'Hiromasa Yonebayashi'],
      ['Studio', 'Studio Ghibli'],
      ['Anno', '2014'],
      ['Durata', '103 min'],
      ['Tratto da', 'Romanzo di J.G. Robinson']
    ]
  },

  {
    slug: 'karate-kid',
    titolo: 'Karate Kid — Per vincere domani',
    anno: 1984,
    durata: '126 min',
    genere: 'Drammatico / Formazione',
    regia: 'John G. Avildsen',
    imdb: 'tt0087538',
    colore: 'karate',
    categorie: ['Grandi classici', 'Crescita interiore', 'Famiglia'],
    frequenza: 'Alta',
    tagline: 'L\'equilibrio è la chiave. Vale per il karate, vale per tutta la vita.',
    chips: ['Crescita', 'Disciplina', 'Rispetto', 'Grande classico'],
    dove: [
      { nome: 'In streaming', tipo: 'streaming' }
    ],
    storia: [
      'Daniel LaRusso è un adolescente che si trasferisce in California con la madre e fatica ad ambientarsi: viene preso di mira da un gruppo di bulli, allievi di una scuola di karate aggressiva. A dargli una mano è il signor Miyagi, l\'anziano tuttofare del suo palazzo, che si rivela un maestro di karate di grande saggezza.',
      'Attraverso esercizi all\'apparenza insensati — il celebre "dai la cera, togli la cera" — Miyagi insegna a Daniel non solo il karate, ma la disciplina, la pazienza e l\'equilibrio interiore. Un classico intramontabile sul passaggio dall\'insicurezza alla fiducia in sé, sotto la guida di un maestro che educa prima l\'anima che il corpo.'
    ],
    frasi: [
      { testo: 'Dai la cera, togli la cera.', chi: 'Maestro Miyagi' },
      { testo: 'L\'equilibrio è la chiave. Equilibrio bene, tutto bene. Vale per karate, vale per tutta la vita.', chi: 'Maestro Miyagi' }
    ],
    canzoni: [
      { titolo: 'You\'re the Best', artista: 'Joe Esposito — dal torneo finale' },
      { titolo: 'The Moment of Truth', artista: 'Survivor — tema del film' }
    ],
    frequenzaTesto: 'Un film che insegna che la vera forza nasce dalla disciplina e dal rispetto. Ispira e rasserena.',
    perche: 'Il rapporto tra Daniel e Miyagi è una delle più belle storie di mentore e allievo del cinema. Insegna ai ragazzi che la forza vera non è la violenza, ma l\'autocontrollo, la costanza e il rispetto — valori che valgono ben oltre il karate.',
    curiosita: 'Diretto da John G. Avildsen — lo stesso regista di "Rocky" — il film condivide con esso lo spirito del riscatto attraverso il sacrificio. Pat Morita, indimenticabile Maestro Miyagi, ottenne una candidatura all\'Oscar per il ruolo.',
    cast: [
      { ruolo: 'Daniel', attore: 'Ralph Macchio' },
      { ruolo: 'Mr. Miyagi', attore: 'Pat Morita' },
      { ruolo: 'Ali', attore: 'Elisabeth Shue' }
    ],
    scheda: [
      ['Regia', 'John G. Avildsen'],
      ['Anno', '1984'],
      ['Durata', '126 min'],
      ['Genere', 'Formazione'],
      ['Premi', 'Nomination Oscar (Morita)']
    ]
  },

  {
    slug: 'ritorno-al-futuro',
    titolo: 'Ritorno al Futuro',
    anno: 1985,
    durata: '116 min',
    genere: 'Avventura / Fantascienza',
    regia: 'Robert Zemeckis',
    imdb: 'tt0088763',
    colore: 'bttf',
    categorie: ['Grandi classici', 'Avventura', 'Fantascienza', 'Famiglia'],
    frequenza: 'Alta',
    tagline: 'Se ci metti abbastanza impegno, puoi ottenere qualunque cosa.',
    chips: ['Avventura', 'Ottimismo', 'Famiglia', 'Grande classico'],
    dove: [
      { nome: 'Prime Video', tipo: 'streaming' },
      { nome: 'NOW', tipo: 'streaming' }
    ],
    storia: [
      'Marty McFly è un ragazzo degli anni \'80 con la passione per la musica e un amico decisamente fuori dal comune: lo stravagante scienziato Doc Brown. Quando Doc costruisce una macchina del tempo ricavata da una DeLorean, Marty si ritrova catapultato indietro nel 1955 — l\'epoca in cui i suoi genitori erano adolescenti.',
      'Per poter tornare al presente e non compromettere la propria esistenza, Marty deve assicurarsi che mamma e papà si innamorino, con l\'aiuto del Doc più giovane. Un\'avventura travolgente, piena di ottimismo e ingegno, che insegna che il futuro non è scritto: lo costruiamo noi, con le nostre scelte.'
    ],
    frasi: [
      { testo: 'Se ci metti abbastanza impegno, puoi ottenere qualunque cosa.', chi: 'Doc Brown' },
      { testo: 'Il tuo futuro non è ancora scritto. Nessun futuro lo è. Il futuro te lo crei tu.', chi: 'Doc Brown' },
      { testo: 'Strade? Dove andiamo non c\'è bisogno di strade.', chi: 'Doc Brown' }
    ],
    canzoni: [
      { titolo: 'The Power of Love', artista: 'Huey Lewis and the News — tema del film' },
      { titolo: 'Johnny B. Goode', artista: 'la celebre scena al ballo' }
    ],
    frequenzaTesto: 'Un film pieno di energia positiva e ottimismo: esci con la voglia di credere che il futuro si può costruire.',
    perche: 'È il classico che insegna, con leggerezza e avventura, che le nostre scelte contano e che nessun futuro è già deciso. Divertente per i ragazzi, nostalgico per i genitori: un film che unisce le generazioni e trasmette fiducia nel domani.',
    curiosita: 'Il ruolo di Marty McFly fu inizialmente affidato a un altro attore, poi sostituito da Michael J. Fox a riprese già iniziate. La DeLorean, con le sue portiere ad ali di gabbiano, è diventata una delle automobili più iconiche della storia del cinema.',
    cast: [
      { ruolo: 'Marty McFly', attore: 'Michael J. Fox' },
      { ruolo: 'Doc Brown', attore: 'Christopher Lloyd' },
      { ruolo: 'Lorraine', attore: 'Lea Thompson' },
      { ruolo: 'Biff', attore: 'Thomas F. Wilson' }
    ],
    scheda: [
      ['Regia', 'Robert Zemeckis'],
      ['Anno', '1985'],
      ['Durata', '116 min'],
      ['Genere', 'Avventura / Fantascienza'],
      ['Prodotto da', 'Steven Spielberg']
    ]
  },

  {
    slug: 'gli-incredibili',
    titolo: 'Gli Incredibili',
    anno: 2004,
    durata: '115 min',
    genere: 'Animazione / Supereroi',
    regia: 'Brad Bird (Pixar)',
    imdb: 'tt0317705',
    colore: 'incredibili',
    categorie: ['Supereroi positivi', 'Animazione', 'Famiglia'],
    frequenza: 'Alta',
    tagline: 'Se tutti sono speciali, allora nessuno lo è. Ma una famiglia unita può salvare il mondo.',
    chips: ['Famiglia', 'Supereroi', 'Animazione', 'Unione'],
    dove: [
      { nome: 'Disney+', tipo: 'streaming' }
    ],
    storia: [
      'Mr. Incredibile e Elastigirl erano supereroi celebri e amati, finché il mondo non ha deciso di fare a meno di loro: costretti a nascondere i propri poteri, oggi vivono una vita "normale" sotto copertura, con tre figli e la frustrazione di chi non può più essere ciò che è davvero. Bob, in particolare, sogna i vecchi tempi da eroe.',
      'Quando una misteriosa missione richiama Mr. Incredibile in azione, l\'intera famiglia si ritrova coinvolta in un\'avventura che li costringerà a unire le forze. Gli Incredibili è un film sui supereroi che parla in realtà di famiglia, di accettazione dei propri talenti e del valore di restare uniti nei momenti difficili.'
    ],
    frasi: [
      { testo: 'Se tutti sono speciali… allora nessuno lo è.', chi: 'Dash' },
      { testo: 'La cosa più importante è che tu sia qui, con noi. Ci prenderemo cura del resto insieme.', chi: 'Elastigirl' }
    ],
    canzoni: [
      { titolo: 'The Incredits', artista: 'Michael Giacchino — colonna sonora' }
    ],
    frequenzaTesto: 'Un film che diverte e insieme celebra la forza dei legami familiari: esci con la voglia di stare con i tuoi.',
    perche: 'Sotto l\'azione e il divertimento, racconta ai bambini e agli adulti che i veri superpoteri sono l\'unità della famiglia e il coraggio di essere sé stessi. Un modello positivo di eroismo, dove la vittoria si conquista insieme, non da soli.',
    curiosita: 'Diretto da Brad Bird, il film vinse l\'Oscar come miglior film d\'animazione. Ogni membro della famiglia ha un potere che riflette il suo ruolo: la mamma è elastica perché "si allunga" per tutti, l\'adolescente diventa invisibile, il papà è forte e testardo.',
    cast: [
      { ruolo: 'Mr. Incredibile', attore: 'Craig T. Nelson' },
      { ruolo: 'Elastigirl', attore: 'Holly Hunter' },
      { ruolo: 'Syndrome', attore: 'Jason Lee' },
      { ruolo: 'Edna Mode', attore: 'Brad Bird' }
    ],
    scheda: [
      ['Regia', 'Brad Bird'],
      ['Studio', 'Pixar'],
      ['Anno', '2004'],
      ['Durata', '115 min'],
      ['Premi', 'Oscar Miglior film d\'animazione']
    ]
  },

  {
    slug: 'spider-man',
    titolo: 'Spider-Man',
    anno: 2002,
    durata: '121 min',
    genere: 'Azione / Supereroi',
    regia: 'Sam Raimi',
    imdb: 'tt0145487',
    colore: 'spiderman',
    categorie: ['Supereroi positivi', 'Grandi classici', 'Avventura'],
    frequenza: 'Alta',
    tagline: 'Da un grande potere derivano grandi responsabilità.',
    chips: ['Responsabilità', 'Supereroi', 'Crescita', 'Grande classico'],
    dove: [
      { nome: 'In streaming', tipo: 'streaming' }
    ],
    storia: [
      'Peter Parker è un timido studente, preso di mira dai bulli e segretamente innamorato della vicina Mary Jane. La sua vita cambia per sempre quando il morso di un ragno geneticamente modificato gli conferisce forza, agilità e sensi straordinari. Ma con i nuovi poteri arriva anche una lezione dolorosa: usarli solo per sé stessi ha un prezzo terribile.',
      'La morte dello zio Ben, e le sue parole "da un grande potere derivano grandi responsabilità", trasformano Peter nell\'eroe Spider-Man. Il film di Sam Raimi è il classico che ha ridefinito il cinema di supereroi: la storia di un ragazzo comune che sceglie di mettere il bene degli altri prima del proprio, imparando cosa significa davvero essere un eroe.'
    ],
    frasi: [
      { testo: 'Da un grande potere derivano grandi responsabilità.', chi: 'Zio Ben' },
      { testo: 'Chiunque tu sia dentro, c\'è sempre una scelta da fare.', chi: 'Peter Parker' }
    ],
    canzoni: [
      { titolo: 'Hero', artista: 'Chad Kroeger feat. Josey Scott — tema del film' },
      { titolo: 'Main Title', artista: 'Danny Elfman — colonna sonora' }
    ],
    frequenzaTesto: 'Un film che ispira il senso del dovere verso gli altri: esci con la voglia di usare bene ciò che hai.',
    perche: 'È il supereroe più umano di tutti: un ragazzo normale che sbaglia, cade e sceglie ogni volta di fare la cosa giusta. Insegna ai ragazzi che i doni ricevuti vanno messi al servizio degli altri, e che il vero eroismo è fatto di responsabilità e sacrificio.',
    curiosita: 'La scena in cui Peter ferma il pranzo di Mary Jane afferrando piatto e bicchieri con riflessi fulminei fu girata realmente da Tobey Maguire, senza effetti digitali: ci vollero 156 ciak per riuscirci. Il film di Sam Raimi diede il via all\'epoca d\'oro del cinema di supereroi.',
    cast: [
      { ruolo: 'Peter Parker', attore: 'Tobey Maguire' },
      { ruolo: 'Mary Jane', attore: 'Kirsten Dunst' },
      { ruolo: 'Green Goblin', attore: 'Willem Dafoe' },
      { ruolo: 'Zio Ben', attore: 'Cliff Robertson' }
    ],
    scheda: [
      ['Regia', 'Sam Raimi'],
      ['Anno', '2002'],
      ['Durata', '121 min'],
      ['Genere', 'Azione / Supereroi'],
      ['Tratto da', 'Il fumetto Marvel']
    ]
  },
  {
    slug: "red",
    titolo: "Red",
    anno: 2022,
    durata: "100 min",
    genere: "Animazione / Famiglia",
    regia: "Domee Shi (Pixar)",
    imdb: "tt8097030",
    colore: "red",
    categorie: ["Animazione", "Famiglia", "Crescita interiore"],
    frequenza: "Alta",
    tagline: "Crescere significa imparare ad accettare ogni parte di sé, anche quella più imprevedibile.",
    chips: ["Crescita interiore", "Animazione", "Adolescenza", "Famiglia"],
    dove: [ { nome: "Disney+", tipo: "streaming" } ],
    storia: [
      "Mei Lee è una ragazzina di tredici anni sicura di sé e piena di energie, divisa tra il desiderio di compiacere la madre iperprotettiva e il caos delladolescenza. Un giorno scopre che, ogni volta che prova unemozione forte, si trasforma in un gigantesco panda rosso.",
      "Tra amicizia, famiglia e la scoperta di sé, Red racconta con ironia e tenerezza il passaggio delicato verso la crescita: imparare ad accogliere le proprie emozioni invece di reprimerle, e a trovare il proprio posto senza perdere le radici."
    ],
    frasi: [
      { testo: "Il nostro lato selvaggio fa parte di noi. Il segreto non è nasconderlo, ma imparare a conviverci.", chi: "Il messaggio del film" }
    ],
    canzoni: [
      { titolo: "Nobody Like U", artista: "4*TOWN — dalla colonna sonora" },
      { titolo: "1 True Love", artista: "4*TOWN" }
    ],
    frequenzaTesto: "Un film che aiuta a guardare ladolescenza con tenerezza: esci più comprensivo verso te stesso e i più giovani.",
    perche: "Racconta ai ragazzi — e ricorda ai genitori — che crescere significa accettare tutte le proprie emozioni. Un ritratto affettuoso del rapporto tra madri e figlie, tra protezione e libertà.",
    curiosita: "È il primo film Pixar diretto interamente da una donna, Domee Shi. Ambientato nella Toronto dei primi anni 2000, è ispirato allinfanzia della regista e alla cultura cinese-canadese.",
    cast: [
      { ruolo: "Mei Lee", attore: "Rosalie Chiang" },
      { ruolo: "Ming (mamma)", attore: "Sandra Oh" }
    ],
    scheda: [
      ["Regia", "Domee Shi"],
      ["Studio", "Pixar"],
      ["Anno", "2022"],
      ["Durata", "100 min"],
      ["Genere", "Animazione / Famiglia"]
    ]
  },

  {
    slug: "soul",
    titolo: "Soul",
    anno: 2020,
    durata: "100 min",
    genere: "Animazione / Famiglia",
    regia: "Pete Docter (Pixar)",
    imdb: "tt2948372",
    colore: "soul",
    categorie: ["Animazione", "Famiglia", "Crescita interiore", "Valori e spirito"],
    frequenza: "Alta",
    tagline: "Il senso della vita non è uno scopo da raggiungere: è ogni singolo istante che scegliamo di vivere davvero.",
    chips: ["Senso della vita", "Animazione", "Presenza", "Spiritualità"],
    dove: [ { nome: "Disney+", tipo: "streaming" } ],
    storia: [
      "Joe Gardner è un insegnante di musica che sogna da sempre di sfondare come pianista jazz. Proprio quando ottiene loccasione della vita, un incidente separa la sua anima dal corpo, trascinandolo in un mondo tra la vita e laldilà, dove le anime scoprono la propria personalità e la propria scintilla.",
      "Insieme a 22, unanima riluttante a nascere, Joe intraprende un viaggio poetico che gli farà riscoprire il vero valore dellesistenza. Soul è una favola profonda sul senso della vita: non i grandi traguardi, ma la meraviglia dei piccoli momenti."
    ],
    frasi: [
      { testo: "Non tutti vivono per uno scopo: a volte, semplicemente, si vive. E va bene così.", chi: "Il messaggio del film" },
      { testo: "Ho deciso di vivere ogni minuto della mia vita.", chi: "Joe Gardner" }
    ],
    canzoni: [
      { titolo: "It's All Right", artista: "Jon Batiste — dalla colonna sonora" },
      { titolo: "Epiphany", artista: "Trent Reznor & Atticus Ross" }
    ],
    frequenzaTesto: "Un film che riporta al presente e alla gratitudine: esci con la voglia di assaporare ogni istante.",
    perche: "Affronta con delicatezza domande grandi — il senso della vita, la vocazione, la presenza — rendendole accessibili. Un invito, per grandi e piccoli, a vivere davvero il momento invece di rincorrere solo traguardi.",
    curiosita: "Vincitore dellOscar come miglior film danimazione, è il primo film Pixar con un protagonista afroamericano. La colonna sonora unisce il jazz di Jon Batiste alle musiche eteree di Trent Reznor e Atticus Ross.",
    cast: [
      { ruolo: "Joe Gardner", attore: "Jamie Foxx" },
      { ruolo: "22", attore: "Tina Fey" }
    ],
    scheda: [
      ["Regia", "Pete Docter"],
      ["Studio", "Pixar"],
      ["Anno", "2020"],
      ["Durata", "100 min"],
      ["Premi", "Oscar Miglior film danimazione"]
    ]
  },
  {
    slug: "inside-out-2",
    titolo: "Inside Out 2",
    anno: 2024,
    durata: "96 min",
    genere: "Animazione / Famiglia",
    regia: "Kelsey Mann (Pixar)",
    imdb: "tt22022452",
    colore: "io2",
    categorie: ["Animazione", "Famiglia", "Crescita interiore"],
    frequenza: "Alta",
    tagline: "Crescere significa fare spazio a emozioni nuove, anche a quelle che non capiamo subito.",
    chips: ["Emozioni", "Adolescenza", "Animazione", "Crescita interiore"],
    dove: [ { nome: "Disney+", tipo: "streaming" } ],
    storia: [
      "Riley ha ormai tredici anni e la sua mente diventa un luogo molto piu affollato: al quartier generale delle emozioni arrivano nuove inquiline, guidate da Ansia, insieme a Invidia, Ennui e Imbarazzo. L'equilibrio costruito da Gioia e le altre viene messo alla prova dalle tempeste dell'adolescenza.",
      "Tra una partita di hockey decisiva e il desiderio di essere accettata, Riley scopre quanto sia complicato — e necessario — imparare a convivere con emozioni piu grandi. Il seguito del capolavoro Pixar continua il discorso sull'educazione emotiva con delicatezza e verita, parlando ai ragazzi e ai loro genitori."
    ],
    frasi: [
      { testo: "Forse quando si cresce si prova meno gioia.", chi: "Gioia" },
      { testo: "Io non decido chi e Riley. Ma posso aiutarla ad affrontare le sue paure.", chi: "Ansia" }
    ],
    canzoni: [
      { titolo: "Inside Out 2 (Main Theme)", artista: "Andrea Datzman — colonna sonora" }
    ],
    frequenzaTesto: "Un film che aiuta ragazzi e genitori a dare un nome alle emozioni dell'adolescenza: esci piu comprensivo.",
    perche: "Racconta con dolcezza il passaggio delicato dell'adolescenza, insegnando che tutte le emozioni — anche l'ansia — hanno un posto e un senso. Educazione emotiva di altissima qualita, per crescere insieme.",
    curiosita: "Inside Out 2 e diventato uno dei film d'animazione con maggior incasso di sempre. La scelta di introdurre l'Ansia come nuova emozione centrale nasce dal desiderio di raccontare le sfide interiori tipiche della preadolescenza.",
    cast: [
      { ruolo: "Gioia", attore: "Amy Poehler" },
      { ruolo: "Ansia", attore: "Maya Hawke" },
      { ruolo: "Tristezza", attore: "Phyllis Smith" }
    ],
    scheda: [
      ["Regia", "Kelsey Mann"],
      ["Studio", "Pixar"],
      ["Anno", "2024"],
      ["Durata", "96 min"],
      ["Genere", "Animazione / Famiglia"]
    ]
  },

  {
    slug: "il-robot-selvaggio",
    titolo: "Il robot selvaggio",
    anno: 2024,
    durata: "102 min",
    genere: "Animazione / Famiglia",
    regia: "Chris Sanders (DreamWorks)",
    imdb: "tt29623480",
    colore: "robot",
    categorie: ["Animazione", "Famiglia", "Buoni sentimenti"],
    frequenza: "Alta",
    tagline: "A volte per trovare la propria natura bisogna imparare ad amare.",
    chips: ["Natura", "Famiglia", "Animazione", "Gentilezza"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Un robot, Roz, naufraga su un'isola selvaggia e deserta, abitata solo da animali. Programmata per essere utile, si ritrova a dover imparare a sopravvivere in un mondo che non conosce — e, soprattutto, a prendersi cura di un piccolo ochetto rimasto orfano.",
      "Quello che nasce come un compito diventa un legame profondo: Roz scopre la tenerezza, la cura, il senso di appartenenza. Il robot selvaggio e una favola commovente sull'amore che ci trasforma, sull'essere famiglia anche quando si e diversi, e sul rispetto per la natura."
    ],
    frasi: [
      { testo: "A volte per sopravvivere dobbiamo diventare qualcosa di piu di come siamo stati costruiti.", chi: "Roz" }
    ],
    canzoni: [
      { titolo: "Kiss the Sky", artista: "Maren Morris — dalla colonna sonora" }
    ],
    frequenzaTesto: "Un film che scalda il cuore e commuove: esci con piu tenerezza verso ogni creatura e verso la natura.",
    perche: "Racconta ai bambini e agli adulti il valore della cura, dell'accoglienza e dei legami che scegliamo. Un inno alla gentilezza e alla natura, di rara bellezza visiva ed emotiva.",
    curiosita: "Tratto dal romanzo di Peter Brown, il film ha uno stile visivo che ricorda un dipinto in movimento. E stato uno dei film d'animazione piu premiati e amati del 2024.",
    cast: [
      { ruolo: "Roz", attore: "Lupita Nyong'o" },
      { ruolo: "Fink (la volpe)", attore: "Pedro Pascal" }
    ],
    scheda: [
      ["Regia", "Chris Sanders"],
      ["Studio", "DreamWorks"],
      ["Anno", "2024"],
      ["Durata", "102 min"],
      ["Tratto da", "Romanzo di Peter Brown"]
    ]
  },

  {
    slug: "transformers-one",
    titolo: "Transformers One",
    anno: 2024,
    durata: "104 min",
    genere: "Animazione / Avventura",
    regia: "Josh Cooley",
    imdb: "tt8864596",
    colore: "transformers",
    categorie: ["Animazione", "Avventura", "Famiglia"],
    frequenza: "Media",
    tagline: "L'amicizia puo cambiare il destino, anche quando le strade si dividono.",
    chips: ["Amicizia", "Avventura", "Animazione", "Origini"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Prima di diventare acerrimi nemici, Orion Pax e D-16 erano amici inseparabili. Il film racconta le origini di quelli che diventeranno Optimus Prime e Megatron, quando erano due giovani robot senza il potere di trasformarsi, uniti dal sogno di scoprire la verita sul loro mondo, Cybertron.",
      "Un'avventura dinamica e sorprendentemente emozionante sul valore dell'amicizia, sulle scelte che ci definiscono e su come strade condivise possano poi dividersi. Adatta ai ragazzi appassionati d'azione, con un cuore che parla di lealta e ideali."
    ],
    frasi: [
      { testo: "Siamo nati per essere qualcosa di piu.", chi: "Orion Pax" }
    ],
    canzoni: [],
    frequenzaTesto: "Un'avventura che parla di amicizia e ideali: intrattiene i ragazzi con un messaggio sulla lealta.",
    perche: "Dietro l'azione, racconta il valore dell'amicizia e delle scelte che ci definiscono. Una storia di origini che intrattiene i ragazzi trasmettendo lealta e il coraggio di credere in qualcosa.",
    curiosita: "E il primo film d'animazione dedicato alle origini dei Transformers. Racconta come due amici siano diventati i simboli del bene e del male dell'intera saga.",
    cast: [
      { ruolo: "Orion Pax / Optimus", attore: "Chris Hemsworth" },
      { ruolo: "D-16 / Megatron", attore: "Brian Tyree Henry" }
    ],
    scheda: [
      ["Regia", "Josh Cooley"],
      ["Anno", "2024"],
      ["Durata", "104 min"],
      ["Genere", "Animazione / Avventura"]
    ]
  },

  {
    slug: "il-piccolo-principe",
    titolo: "Il Piccolo Principe",
    anno: 2015,
    durata: "108 min",
    genere: "Animazione / Famiglia",
    regia: "Mark Osborne",
    imdb: "tt1754656",
    colore: "principe",
    categorie: ["Animazione", "Famiglia", "Crescita interiore", "Valori e spirito"],
    frequenza: "Molto alta",
    tagline: "L'essenziale e invisibile agli occhi: si vede bene solo con il cuore.",
    chips: ["Poesia", "Infanzia", "Animazione", "Valori"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Una bambina, cresciuta troppo in fretta dalla madre in un mondo di adulti frenetici, incontra l'eccentrico vicino di casa: un vecchio aviatore che le racconta la storia del Piccolo Principe, l'amico che incontro un tempo nel deserto.",
      "Attraverso questo racconto nel racconto, la bambina riscopre l'immaginazione, l'amicizia e cio che conta davvero nella vita. Ispirato al capolavoro di Antoine de Saint-Exupery, e un film poetico e commovente sul non perdere mai il bambino che siamo stati."
    ],
    frasi: [
      { testo: "L'essenziale e invisibile agli occhi.", chi: "La volpe" },
      { testo: "E il tempo che hai perso per la tua rosa che rende la tua rosa cosi importante.", chi: "Il Piccolo Principe" }
    ],
    canzoni: [
      { titolo: "Turnaround", artista: "Camille & Hans Zimmer — dalla colonna sonora" }
    ],
    frequenzaTesto: "Un film che riporta all'essenziale e alla poesia della vita: esci piu leggero e piu presente.",
    perche: "Trasmette ai bambini — e ricorda agli adulti — che cio che conta davvero non si vede con gli occhi. Una favola poetica su immaginazione, amicizia e valori, fedele allo spirito di Saint-Exupery.",
    curiosita: "E il primo adattamento cinematografico in lungometraggio del celebre libro di Saint-Exupery. Unisce due tecniche: la computer grafica per la storia della bambina e la stop-motion in carta per il mondo del Piccolo Principe.",
    cast: [
      { ruolo: "L'Aviatore", attore: "Jeff Bridges" },
      { ruolo: "La Bambina", attore: "Mackenzie Foy" }
    ],
    scheda: [
      ["Regia", "Mark Osborne"],
      ["Anno", "2015"],
      ["Durata", "108 min"],
      ["Tratto da", "Romanzo di A. de Saint-Exupery"]
    ]
  },

  {
    slug: "shaun-vita-da-pecora",
    titolo: "Shaun, vita da pecora",
    anno: 2015,
    durata: "85 min",
    genere: "Animazione / Famiglia",
    regia: "Mark Burton, Richard Starzak (Aardman)",
    imdb: "tt2872750",
    colore: "shaun",
    categorie: ["Animazione", "Famiglia"],
    frequenza: "Alta",
    tagline: "A volte basta un pizzico di ingegno e di amicizia per risolvere ogni guaio.",
    chips: ["Comicita gentile", "Amicizia", "Animazione", "Aardman"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Shaun e una pecora sveglia e intraprendente che sogna un giorno di liberta lontano dalla routine della fattoria. Ma il suo piano combina un guaio: il contadino finisce in citta, smemorato e lontano da casa. Tocca a Shaun e al gregge partire per riportarlo indietro.",
      "Senza una parola di dialogo, solo con gesti, sguardi e musica, Aardman firma una commedia esilarante e tenerissima, adatta davvero a tutti — dai piu piccoli ai nonni. Una storia sull'amicizia, l'ingegno e il valore di casa."
    ],
    frasi: [],
    canzoni: [
      { titolo: "Feels Like Summer", artista: "Tim Wheeler — dai titoli" }
    ],
    frequenzaTesto: "Una comicita gentile e universale che diverte tutta la famiglia: esci con il sorriso e il cuore leggero.",
    perche: "E il film perfetto da vedere tutti insieme: senza dialoghi, fa ridere e commuovere ogni eta. Insegna amicizia, ingegno e l'affetto per casa, con la maestria artigianale di Aardman.",
    curiosita: "Realizzato interamente in stop-motion con la tecnica della plastilina, come Wallace & Gromit. Non contiene dialoghi comprensibili: la storia si racconta solo con immagini e suoni, rendendolo comprensibile in ogni lingua.",
    cast: [
      { ruolo: "Studio", attore: "Aardman Animations" },
      { ruolo: "Tecnica", attore: "Stop-motion" },
      { ruolo: "Adatto a", attore: "Tutta la famiglia" }
    ],
    scheda: [
      ["Studio", "Aardman"],
      ["Anno", "2015"],
      ["Durata", "85 min"],
      ["Genere", "Animazione / Famiglia"]
    ]
  },

  {
    slug: "pocahontas",
    titolo: "Pocahontas",
    anno: 1995,
    durata: "81 min",
    genere: "Animazione / Classico Disney",
    regia: "Mike Gabriel, Eric Goldberg (Disney)",
    imdb: "tt0114148",
    colore: "pocahontas",
    categorie: ["Animazione", "Grandi classici", "Famiglia", "Valori e spirito"],
    frequenza: "Alta",
    tagline: "Ogni sentiero che scegli ti cambia: ascolta il vento e il cuore prima di giudicare.",
    chips: ["Rispetto", "Natura", "Classico Disney", "Dialogo"],
    dove: [ { nome: "Disney+", tipo: "streaming" } ],
    storia: [
      "Pocahontas e la figlia del capo di una tribu nativa americana, legata profondamente alla natura e alla saggezza della sua gente. Quando i coloni inglesi sbarcano sulle sue terre, incontra il capitano John Smith: due mondi lontanissimi, pronti allo scontro.",
      "Attraverso il loro rapporto, Pocahontas insegna il valore del rispetto reciproco, del dialogo contro il pregiudizio e dell'armonia con la natura. Un classico Disney che, con le sue canzoni indimenticabili, parla di tolleranza e comprensione tra culture diverse."
    ],
    frasi: [
      { testo: "Puoi possedere la terra e comunque non possederla affatto.", chi: "Pocahontas" },
      { testo: "Colori del vento: scoprirai quanto e immenso il mondo, se lo guardi con occhi nuovi.", chi: "Il messaggio del film" }
    ],
    canzoni: [
      { titolo: "Colori del vento", artista: "canzone premio Oscar" },
      { titolo: "Colours of the Wind", artista: "Vanessa Williams — versione originale" }
    ],
    frequenzaTesto: "Un classico che apre al rispetto e al dialogo: esci con piu apertura verso l'altro e verso la natura.",
    perche: "Insegna ai bambini il rispetto per le culture diverse, il dialogo contro il pregiudizio e l'amore per la natura. Un classico Disney con canzoni memorabili e un messaggio di tolleranza sempre attuale.",
    curiosita: "E il primo Classico Disney ispirato a un personaggio storico realmente esistito. La canzone Colori del vento vinse l'Oscar come miglior canzone originale.",
    cast: [
      { ruolo: "Pocahontas", attore: "Irene Bedard (voce)" },
      { ruolo: "John Smith", attore: "Mel Gibson (voce)" }
    ],
    scheda: [
      ["Studio", "Walt Disney"],
      ["Anno", "1995"],
      ["Durata", "81 min"],
      ["Premi", "2 Oscar (canzone e colonna sonora)"]
    ]
  },

  {
    slug: "babe-maialino-coraggioso",
    titolo: "Babe, maialino coraggioso",
    anno: 1995,
    durata: "91 min",
    genere: "Famiglia / Avventura",
    regia: "Chris Noonan",
    imdb: "tt0112431",
    colore: "babe",
    categorie: ["Famiglia", "Grandi classici", "Buoni sentimenti"],
    frequenza: "Alta",
    tagline: "La gentilezza puo aprire strade che la forza non conosce.",
    chips: ["Gentilezza", "Sogni", "Grande classico", "Famiglia"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Babe e un maialino orfano che finisce nella fattoria del contadino Hoggett. Anziche rassegnarsi al destino comune dei maiali, Babe sogna qualcosa di diverso: diventare un cane da pastore. Con dolcezza e buone maniere, conquista il rispetto degli altri animali.",
      "Contro ogni pregiudizio, il piccolo Babe dimostra che la gentilezza e la determinazione possono superare qualsiasi barriera. Una favola tenerissima e premiata, che insegna ai bambini a credere nei propri sogni e a trattare tutti con rispetto."
    ],
    frasi: [
      { testo: "Va tutto bene, maialino.", chi: "Il contadino Hoggett" }
    ],
    canzoni: [
      { titolo: "If I Had Words", artista: "tema ricorrente del film" }
    ],
    frequenzaTesto: "Una favola dolcissima sulla gentilezza: esci convinto che i modi gentili possano cambiare le cose.",
    perche: "Insegna ai bambini che la gentilezza e la determinazione vincono i pregiudizi. Una storia commovente sul credere nei propri sogni e sul rispetto verso ogni creatura, adatta a tutta la famiglia.",
    curiosita: "Il film uni animali reali ed effetti animatronici all'avanguardia per l'epoca, vincendo l'Oscar per i migliori effetti speciali. Fu candidato anche come miglior film.",
    cast: [
      { ruolo: "Contadino Hoggett", attore: "James Cromwell" },
      { ruolo: "Babe", attore: "voce di Christine Cavanaugh" }
    ],
    scheda: [
      ["Regia", "Chris Noonan"],
      ["Anno", "1995"],
      ["Durata", "91 min"],
      ["Premi", "Oscar migliori effetti speciali"]
    ]
  },

  {
    slug: "casper",
    titolo: "Casper",
    anno: 1995,
    durata: "100 min",
    genere: "Famiglia / Fantasy",
    regia: "Brad Silberling",
    imdb: "tt0112642",
    colore: "casper",
    categorie: ["Famiglia", "Grandi classici"],
    frequenza: "Media",
    tagline: "Anche chi non c'e piu puo insegnarci a non aver paura di voler bene.",
    chips: ["Amicizia", "Dolcezza", "Grande classico", "Famiglia"],
    dove: [ { nome: "In streaming", tipo: "streaming" } ],
    storia: [
      "Casper e un fantasmino gentile e solo, che infesta suo malgrado una grande villa insieme a tre zii dispettosi. Quando nella casa arrivano il dottor Harvey, specialista nel comunicare con gli spiriti, e sua figlia Kat, Casper trova finalmente un'amica.",
      "Tra momenti divertenti e altri commoventi, Casper affronta con delicatezza temi importanti come la perdita, la solitudine e il desiderio di essere accettati. Un classico anni '90 che parla ai bambini di amicizia e di come affrontare, con dolcezza, anche i sentimenti difficili."
    ],
    frasi: [
      { testo: "Posso restare cosi, se ti va.", chi: "Casper" }
    ],
    canzoni: [
      { titolo: "Remember Me This Way", artista: "Jordan Hill — tema del film" }
    ],
    frequenzaTesto: "Un classico dolce che tocca il cuore: esci con piu tenerezza verso l'amicizia e i sentimenti difficili.",
    perche: "Affronta con delicatezza temi come la perdita e la solitudine, rendendoli accessibili ai bambini. Una storia di amicizia gentile che insegna a non aver paura dei sentimenti e ad accogliere chi e diverso.",
    curiosita: "E il primo film in cui un personaggio protagonista interamente in computer grafica interagisce con attori reali per l'intera durata. Casper nasce come celebre personaggio dei fumetti e dei cartoni animati.",
    cast: [
      { ruolo: "Kat", attore: "Christina Ricci" },
      { ruolo: "Dr. Harvey", attore: "Bill Pullman" }
    ],
    scheda: [
      ["Regia", "Brad Silberling"],
      ["Anno", "1995"],
      ["Durata", "100 min"],
      ["Genere", "Famiglia / Fantasy"]
    ]
  }
];

// Categorie per i filtri del catalogo
export const categorie = ['Tutti', 'Famiglia', 'Animazione', 'Supereroi positivi', 'Grandi classici', 'Crescita interiore', 'Avventura', 'Fantascienza', 'Natale', 'Valori e spirito', 'Buoni sentimenti'];

// Funzioni di comodo
export function getFilm(slug) {
  return films.find(f => f.slug === slug);
}
export function getAllSlugs() {
  return films.map(f => f.slug);
}
export function correlati(slug, n = 3) {
  return films.filter(f => f.slug !== slug).slice(0, n);
}
