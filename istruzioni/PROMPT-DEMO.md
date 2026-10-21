# Segnale — Prompt della demo

Sono esempi per una chat nel browser, per esempio Duck.ai. Non richiedono che il servizio possa aprire la tua cartella o modificare direttamente i file. Incolla il contenuto dei file indicati. Se apri una nuova conversazione, fornisci di nuovo il codice necessario.

I prompt descrivono il risultato e i vincoli, lasciando al chatbot l'individuazione delle modifiche tecniche. La richiesta di CSS Grid nel terzo prompt è un vincolo dell'esercitazione, non il codice della soluzione. Le risposte possono variare. Prima di copiare controlla file, nomi delle classi, regole esistenti e istruzioni di inserimento. Copia soltanto il codice; salva e prova nel browser dopo ogni passaggio.

## 1. Completare i collegamenti

Incolla prima i contenuti di `index.html` e `programma.html`, distinguendoli con il nome del file. Poi chiedi:

> Sto lavorando al sito didattico Segnale. Ti ho fornito i due HTML, che si trovano nella stessa cartella. Voglio poter passare dalla Home al Programma usando sia il menu sia il pulsante Esplora il programma, e tornare alla Home dal menu del Programma. Individua cosa manca e proponi la modifica minima. Indicami in quale file intervenire e quali parti sostituire, spiegando brevemente perché. Mantieni invariati contenuti, stile e altri comportamenti del sito.

**Verifica:** dalla Home apri Programma con il menu, torna con Home, poi prova «Esplora il programma». Un `href="#"` non collega l'altra pagina: punta all'inizio del documento corrente.

## 2. Osservare il CSS condiviso e riusare una variabile

Incolla il contenuto di `style.css`. Poi chiedi:

> Vorrei che la linea sotto l'intestazione riprendesse il colore principale del sito e rimanesse coerente se in futuro cambio la palette. La modifica deve valere per entrambe le pagine. Ti ho fornito il CSS attuale: proponi la modifica minima, indicami dove applicarla e spiegami perché funziona. Mantieni invariati gli altri aspetti del sito.

**Verifica:** salva il CSS e apri entrambe le pagine. La linea deve essere verde in tutte e due e la dichiarazione deve usare `var(--colore-primario)`. La demo non richiede di cambiare il valore in `:root`. Il colore hover del pulsante usa la variabile distinta `--colore-primario-scuro`.

## 3. Disporre le schede in due colonne

> Nel Programma vorrei le due schede evento affiancate, su colonne della stessa larghezza, con uno spazio regolare fra loro. Usa CSS Grid. Indicami cosa modificare e dove, spiegando brevemente la soluzione.

**Verifica:** sullo schermo largo le due schede devono essere affiancate e separate da uno spazio regolare. Restringi la finestra e osserva cosa succede. Se rimangono due colonne e i testi sono troppo stretti, hai un limite da correggere. Se il chatbot ha già aggiunto un comportamento responsive, non introdurre un errore artificiale: il prompt 4 servirà a controllare le soglie richieste.

## 4. Adattare la griglia

Incolla il CSS aggiornato, incluse le regole delle schede e le eventuali media query proposte dal chatbot. Poi chiedi:

> Ora voglio verificare il Programma anche su schermo stretto. Il risultato deve essere una colonna sotto 600px e due colonne da 600px in su, con testi leggibili e senza scorrimento orizzontale. Ti fornisco il CSS aggiornato: proponi le sole modifiche necessarie, spiegami dove applicarle e come verificare il risultato. Conserva contenuti, stile delle schede e spaziatura già scelta. Se queste condizioni sono già soddisfatte, spiegami come riconoscerlo nel codice e controllarlo nel browser.

**Verifica:** a 375 px una colonna, a 768 px due. Controlla anche 599 e 600 px. La demo si ferma a due colonne: il compito richiede il caso a tre colonne da 1024 px.

## Per il tuo lavoro

Non è obbligatorio riusare questi prompt alla lettera. Formula richieste limitate, fornisci il codice aggiornato e chiedi sempre dove applicare la modifica. I requisiti in `CONSEGNA.md` indicano il risultato richiesto, anche se il chatbot suggerisce altro.
