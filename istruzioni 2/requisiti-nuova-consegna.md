# Segnale — Nuova pagina Info e luoghi

Completa il tuo sito Segnale aggiungendo una pagina **Info e luoghi**, con galleria fotografica, mappa e indirizzi.

## Punto di partenza

Continua dal tuo sito Segnale già completato. Se devi recuperare, usa la versione completa della consegna precedente fornita dal docente. Conserva una versione funzionante prima di iniziare.

## Pagina e navigazione

- Aggiungi `info.html`, con un titolo di pagina appropriato e una sola intestazione principale `h1`.
- Aggiungi la voce Info e luoghi nel menu di Home, Programma e nuova pagina.
- Mantieni stile e personalizzazioni del tuo sito, usando il CSS condiviso. La nuova pagina deve funzionare alle larghezze di 375, 768 e 1280 px, senza scorrimento orizzontale.
- Mantieni i sei eventi e i collegamenti precedenti.

## Galleria

- Integra Swiper 14.4.0 da CDN, con CSS e JavaScript della stessa versione. La versione usata nell’esempio docente è 14.4.0.
- Usa le tre fotografie nella cartella `assets/luoghi/`, una per sede, accompagnate da nome e didascalia.
- Mostra una fotografia alla volta e consenti di raggiungerle tutte con comandi precedente/successivo.
- Non attivare l’avanzamento automatico.
- Non è richiesto copiare esattamente l’aspetto o i cambiamenti dei pulsanti dell’esempio docente sotto i 320 px.

## Mappa e indirizzi

- Incorpora la mappa uMap condivisa, partendo dall’iframe fornito: non occorre creare una mappa o un account.
- Adatta la larghezza al contenitore, mantieni il titolo descrittivo dell’iframe e il collegamento alla vista a schermo intero.
- Riporta anche fuori dalla mappa i nomi e gli indirizzi delle tre sedi e un collegamento alle indicazioni per ciascuna (puoi usare Google Maps).

  - Sede centrale, Corso Duca degli Abruzzi 24;
  - Politecnico al Valentino, Viale Mattioli 39;
  - sede di Mirafiori, Corso Luigi Settembrini 178. Tutte a Torino.

## Accessibilità e verifiche

- Titoli ordinati, testi alternativi appropriati per le fotografie e contrasto leggibile fra testo e sfondo. Per il testo normale usa il riferimento di almeno 4,5:1 richiamato a lezione.
- Verifica il focus e l’uso da tastiera dei comandi della galleria.
- Apri il sito a 375, 768 e 1280 px; controlla menu, immagini, didascalie, comandi e mappa.

## AI e pubblicazione

Puoi usare un chatbot o lavorare direttamente sul codice. In entrambi i casi verifica il risultato. Conserva una breve traccia delle richieste e dei controlli: non sono richiesti log completi o abbonamenti AI.

Aggiorna la stessa repository e GitHub Pages con il percorso già usato, poi controlla la versione pubblica. Non sono richiesti Node.js, npm, compilazione o un numero fisso di commit.

## Materiali e riferimenti

Le fotografie sono già nello ZIP:

| File | Sede e contenuto della didascalia |
| --- | --- |
| `assets/luoghi/sede-centrale.jpg` | Sede centrale — Corso Duca degli Abruzzi 24 — Officina Nord nel festival immaginario. |
| `assets/luoghi/politecnico-valentino.jpg` | Politecnico al Valentino — Viale Mattioli 39 — Spazio Forma nel festival immaginario. |
| `assets/luoghi/mirafiori.jpg` | Sede di Mirafiori — Corso Luigi Settembrini 178 — Cortile Comune nel festival immaginario. |

Scrivi testi alternativi appropriati per le fotografie. Puoi rielaborare le didascalie mantenendo corrette le informazioni.

- [Swiper: esempio minimo di integrazione](https://swiperjs.com/get-started). Segui i passaggi relativi a CDN, struttura HTML e inizializzazione; adatta l’esempio al tuo sito.
- CSS della versione usata: `https://cdn.jsdelivr.net/npm/swiper@14.4.0/swiper-bundle.min.css`.
- JavaScript della stessa versione: `https://cdn.jsdelivr.net/npm/swiper@14.4.0/swiper-bundle.min.js`.

### Codice della mappa da incorporare

Inserisci questo iframe nella sezione **Come arrivare** di `info.html`. Conserva l’indirizzo completo e il titolo descrittivo; adatta le dimensioni nel CSS condiviso.

```html
<iframe id="mappa-sedi"
  title="Mappa delle tre sedi di riferimento per il festival Segnale a Torino"
  src="https://umap.openstreetmap.fr/it/map/segnale-sedi-del-festival-immaginario_1479665?scaleControl=false&amp;miniMapControl=false&amp;scrollWheelZoom=false&amp;zoomControl=true&amp;editMode=disabled&amp;moreControl=true&amp;searchControl=null&amp;tilelayersControl=null&amp;embedControl=null&amp;datalayersControl=true&amp;onLoadPanel=none&amp;captionBar=false&amp;captionMenus=true#12/45.0465/7.6528"></iframe>
```

Aggiungi sotto la mappa anche il collegamento alla vista a schermo intero:

```html
<a href="https://umap.openstreetmap.fr/it/map/segnale-sedi-del-festival-immaginario_1479665?scaleControl=false&amp;miniMapControl=false&amp;scrollWheelZoom=true&amp;zoomControl=true&amp;editMode=disabled&amp;moreControl=true&amp;searchControl=null&amp;tilelayersControl=null&amp;embedControl=null&amp;datalayersControl=true&amp;onLoadPanel=none&amp;captionBar=false&amp;captionMenus=true#12/45.0465/7.6528">Visualizza la mappa a schermo intero</a>
```

### Fonti delle fotografie fornite

- Sede centrale: Neq00, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Politecnico_di_Torino,_sede_di_corso_Duca_degli_Abruzzi,_Torino.jpg).
- Valentino: Simo.Albo80, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Il_cortile_geometrico_del_Valentino.jpg).
- Mirafiori: [ICIS](https://www.icis.it/wp-content/uploads/2024/10/L2300-CENTRO-DESIGN-anteprima.jpg).
