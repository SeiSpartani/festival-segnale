#  **18/11/2026**


### 1. Riepilogo delle attività svolte

* **Modello dati e programma dinamico (`dati/SCHEMA.md`, `programma.js`):**
* Redazione della scheda dati `dati/SCHEMA.md` (entità, campi, chiavi primarie/esterne e diagramma Mermaid) allineata alla struttura di `eventi.json` e `sedi.json`.


* Rimozione delle schede statiche da `programma.html` e creazione dello script esterno `programma.js` per popolare la griglia tramite `fetch`, gestendo stati di caricamento, elenchi vuoti, errori di rete e sedi mancanti («Sede da definire»).


* **Integrazione API Meteo (`info.html`, `info.js`):**
* Aggiunta della sezione *Meteo a Torino adesso* con chiamata `fetch` a **Open-Meteo** per mostrare temperatura, vento e ora di rilevazione, separando la logica JavaScript nel file esterno `info.js`.



---

### 2. Problemi riscontrati e soluzioni adottate

* **Errore di sintassi nel CSS iniziale (`-` invece di `*`):**
* *Problema:* Il foglio di stile di partenza conteneva un trattino `-` al posto del selettore universale per il `box-sizing`.
* *Soluzione:* Sostituito con `* { box-sizing: border-box; }` per garantire il corretto calcolo delle larghezze su tutti i breakpoint.


* **Disallineamento dei dati e dei campi JSON:**
* *Problema:* Inizialmente erano stati generati testi alternativi per gli eventi e nomi di campi JSON (`giorno`, `alt`) diversi da quelli del progetto originale (`data` in formato ISO, `immagine_alt`).


* *Soluzione:* Ripristinati i 6 eventi con i contenuti esatti del file originale e allineati sia `dati/SCHEMA.md` sia `programma.js` ai campi reali di `eventi.json` e `sedi.json`.




* **JavaScript inline nei file HTML:**
* *Problema:* Gli script per il caricamento del programma e l'inizializzazione di Swiper/meteo erano inizialmente inclusi direttamente nei file HTML.
* *Soluzione:* Estratto tutto il codice JavaScript nei file dedicati `programma.js` e `info.js`, collegandoli nell'`<head>` tramite l'attributo `defer`.


* **Errore `400 (Bad Request)` nella chiamata API Open-Meteo:**
* *Problema:* Durante il copia-incolla dell'URL di Open-Meteo in `info.js`, la sequenza `¤t=` è stata interpretata come l'entità HTML del simbolo `¤` (`%C2%A4`), causando il rifiuto della richiesta da parte del server.
* *Soluzione:* Sostituita la concatenazione manuale dell'URL con l'oggetto `URLSearchParams` per codificare i parametri in modo sicuro.