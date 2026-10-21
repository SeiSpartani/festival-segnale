# Segnale — Compito da svolgere nelle due settimane

Completa e personalizza Home e Programma partendo dalla base fornita. Il sito deve essere già pubblicato prima del prossimo incontro.

## Requisiti

### Pagine e contenuti

- Mantieni Home e Programma, i contenuti forniti e le informazioni sul carattere immaginario del festival.
- Fai funzionare il menu in entrambe le pagine e il collegamento «Esplora il programma» nella Home.
- Completa il Programma con tutti e sei gli eventi di `CONTENUTI-EVENTI.md`. Ogni scheda deve avere titolo, immagine, testo alternativo, giorno, orario, categoria, descrizione e sede.
- Usa percorsi relativi per collegamenti, immagini e CSS. Mantieni i nomi dei file minuscoli e senza spazi.

### Stile e disposizione

- Usa un unico `style.css` condiviso dalle due pagine, senza framework, librerie esterne o strumenti che richiedano npm.
- Usa CSS Grid e `gap` per le schede del Programma.
- Ottieni **una colonna sotto 600 px, due colonne da 600 px a 1023 px, tre colonne da 1024 px in su**. Le soglie sono scelte per questo esercizio, non regole universali per tutti i siti.
- Mantieni testi e immagini leggibili e nessuno scorrimento orizzontale nelle verifiche a 375, 768 e 1280 px.
- Personalizza `--colore-primario` in `:root` e scegli una variante coerente per `--colore-primario-scuro`. Mantieni i richiami con `var()` nei collegamenti, nel pulsante e nel bordo dell'intestazione completato durante la demo. Controlla la leggibilità del testo anche durante l'hover.
- Scegli i caratteri per il testo e i titoli impostando i valori di `--font-testo` e `--font-titoli`, mantenendo leggibilità e coerenza fra le pagine. Puoi anche conservare i caratteri della base.
- Modifica almeno una spaziatura: per esempio `gap`, spazio fra sezioni o `padding` delle schede.

Le personalizzazioni obbligatorie restano il colore principale con la sua variante hover e almeno una spaziatura. Non vengono premiati un particolare gusto estetico o la scelta di un font specifico. Interlinea, dimensioni e spaziature restano nelle rispettive regole CSS: non devi trasformare ogni valore in una variabile.

### AI

Puoi chiedere tutte le modifiche al chatbot oppure lavorare direttamente sui file. In entrambi i casi devi verificare il sito. Non sono necessari abbonamenti AI. Condividi con il chatbot soltanto i file e i contenuti necessari, evitando dati personali o credenziali.

Tieni una breve traccia di come hai usato l’AI: cosa hai chiesto, quali suggerimenti hai applicato e come li hai verificati. Alla prossima esercitazione, quando consegnerai, ti verranno fatte domande a riguardo. Se non hai usato l’AI, potrai indicarlo.

Procedi per richieste piccole: chiedi quali file cambiare, applica una modifica alla volta, salva e controlla. Se il risultato non coincide con la richiesta, descrivi cosa osservi e chiedi una correzione mirata. Non incollare testo esplicativo o i delimitatori a tre backtick dentro HTML e CSS.

### Pubblicazione

- Pubblica il progetto in una **nuova repository personale pubblica chiamata `festival-segnale`**, senza modificare la repository di Studio Intervallo.
- Il percorso consigliato è Git da VS Code con collegamento a GitHub. Se usi questo percorso, registra la base con un commit iniziale e poi i cambiamenti con messaggi comprensibili; non è richiesto un numero fisso di commit. Fai push delle modifiche.
- **Se proprio non riesci a usare Git da VS Code o il collegamento a GitHub**, puoi creare la repository pubblica `festival-segnale` direttamente dal sito GitHub e caricare i file dal browser, come descritto dal professore nelle slide della **lezione 3, passaggi “Crea il repository” e “Carica i file”**. Carica i file del sito e la sottocartella `assets`, mantenendo la struttura: non caricare lo ZIP né la cartella esterna `festival-segnale` che li contiene.
- In entrambi i casi, nella radice della repository devono esserci direttamente `index.html`, `programma.html`, `style.css` e `assets/`.
- Attiva GitHub Pages da `main`, cartella `/ (root)`, e controlla il risultato online. L'indirizzo atteso è `https://nomeutente.github.io/festival-segnale/`, dove nomeutente è il tuo nome utente GitHub.
- Non aspettare l'incontro per iniziare la pubblicazione: devi arrivare con sito e repository pronti.
