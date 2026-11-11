# Segnale — Moodboard, carattere web, menu responsive e intestazione sticky

Continua a sviluppare il tuo sito Segnale partendo dalla versione con Home, Programma e Info e luoghi. Mantieni contenuti e funzioni delle consegne precedenti e aggiorna la stessa repository e GitHub Pages.

## 1. Moodboard

Prepara un PDF con **3–4 elementi di riferimento** per l’identità visiva del festival. Non devono essere necessariamente immagini: puoi includere una palette di colori, un campione tipografico, parole chiave sull’atmosfera, un manifesto, una fotografia o un esempio di impaginazione.

- Per ogni elemento scrivi **una riga di commento**: quale aspetto ti interessa e che cosa suggerisce per il tuo sito.
- Indica **tre scelte visive riconoscibili nel sito**, per esempio colori, caratteri e spaziature, collegandole ai riferimenti raccolti. Puoi mantenere scelte già fatte se le motivi.
- Indica il nome del carattere web scelto e il servizio da cui proviene.
- Salva il documento nella repository come `progettazione/moodboard.pdf`.

Riferimento: **lezione 5, slide 47–48**.

## 2. Carattere web

Integra **almeno un carattere web** coerente con la moodboard, per i titoli oppure per il testo. Puoi usare, per esempio, Google Fonts.

- Copia dal servizio il collegamento necessario a caricare il carattere e inseriscilo nell’head delle tre pagine in cui viene utilizzato.
- Applica il carattere dal CSS condiviso, aggiornando `--font-titoli` o `--font-testo` già presenti nel sito.
- Mantieni una famiglia di riserva appropriata nella dichiarazione, per esempio `serif` oppure `sans-serif`.
- Usa la scelta in modo coerente nelle tre pagine e controlla che il testo rimanga leggibile.

Riferimenti: **lezione 4, slide 24–25**; [Google Fonts](https://fonts.google.com/) e [guida ufficiale: collegamento HTML e uso nel CSS](https://developers.google.com/fonts/docs/getting_started).

Il collegamento HTML carica il carattere; il CSS stabilisce dove usarlo. Scrivere soltanto il nome nel CSS non scarica un carattere che non è presente sul computer del visitatore.

## 3. Menu responsive

Nelle tre pagine, fai cambiare la disposizione dei collegamenti Home, Programma e Info e luoghi:

- **Sotto 600 px:** collegamenti disposti uno sotto l’altro, in colonna.
- **Da 600 px in su:** collegamenti disposti in riga.

Mantieni tutti i collegamenti visibili, funzionanti e leggibili, senza sovrapposizioni o scorrimento orizzontale. Adatta spazi e allineamento allo stile del tuo sito.

Il risultato richiesto si ottiene con HTML e CSS.

## 4. Intestazione sticky

Nelle tre pagine, rendi l’intestazione con il menu **sticky**: durante lo scorrimento deve fermarsi in alto e rimanere disponibile.

- Usa `position: sticky` con `top: 0`, adattando lo stile della tua intestazione.
- Mantieni uno sfondo che renda leggibili nome del festival e collegamenti anche mentre scorrono gli altri contenuti.
- Controlla che il menu sia utilizzabile e che galleria e mappa non coprano l’intestazione durante lo scorrimento.
- Sul telefono verifica che l’intestazione con il menu in colonna lasci spazio sufficiente per leggere il contenuto.

## 5. Verifica e pubblicazione

- Controlla Home, Programma e Info e luoghi a **375, 768 e 1280 px**.
- Verifica che il menu cambi disposizione e che i collegamenti funzionino.
- Scorri le tre pagine e controlla che l’intestazione sticky rimanga leggibile e utilizzabile.
- Controlla che il carattere web venga caricato anche sul sito pubblico. Se hai dubbi, verifica le richieste nel pannello Network, mostrato nella **lezione 4, slide 39**.
- Verifica che galleria, mappa, immagini e contenuti precedenti continuino a funzionare.
- Inserisci `progettazione/moodboard.pdf` nella stessa repository e pubblica le modifiche con il percorso già utilizzato.

Puoi lavorare direttamente sul codice o usare un chatbot. Parti dai riferimenti nelle slide, fornisci i file aggiornati quando servono e verifica le modifiche nel browser e sul sito pubblico.
