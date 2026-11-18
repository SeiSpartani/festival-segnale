# Segnale — Programma dai dati

Trasforma il Programma del tuo sito Segnale: le schede devono essere generate da due file JSON, con eventi e sedi collegati. In Info e luoghi aggiungi un piccolo riquadro **Meteo a Torino adesso**, con dati letti da un’API pubblica.

## Da dove partire

**Se hai svolto la consegna precedente, continua dal tuo sito**, conservando le tue personalizzazioni, e copia da questo pacchetto la cartella `dati/`. Altrimenti usa il sito in questo ZIP come base di recupero: il PDF `progettazione/moodboard.pdf` è un esempio docente, non una moodboard tua.

**Correzione della richiesta precedente:** l’obbligo di cambiare la disposizione del menu fra telefono e desktop è stato tolto: era un errore, perché rendeva la visualizzazione peggiore.

## 1. Completa i due JSON

I file in `dati/` contengono **una sede e due eventi**. Completali con le altre due sedi e i quattro eventi, presi dal tuo Programma e da Info e luoghi, seguendo i record già presenti. Non è necessario che gli ID siano consecutivi, come mostrano gli eventi forniti con id 1 e 4. Nome e indirizzo della sede stanno solo in `sedi.json`: ogni evento li richiama con `sede_id`.

## 2. Descrivi i dati

Crea `dati/SCHEMA.md` con una breve scheda dati:

1. Entità: Evento e Sede.
2. Campi di ciascuna entità, con tipo ed esempio: sono quelli dei due JSON che hai completato.
3. Chiave primaria di ciascuna entità: `id` numerico, univoco nell’entità e stabile.
4. Relazione: una sede può ospitare più eventi; ogni evento si svolge in una sede. `Evento.sede_id` fa riferimento a `Sede.id`.
5. Quantità: sei eventi e tre sedi.
6. Chi aggiorna i dati e come: modifica dei file nella repository e pubblicazione.
7. Che cosa mostra la pagina.

Nello stesso file, sotto la scheda, aggiungi lo schema Evento–Sede in Mermaid oppure un disegno leggibile.

## 3. Genera il Programma

Fai in modo che `programma.html` carichi i due JSON con `fetch` e costruisca le schede: nell’HTML non devono restare le sei schede scritte a mano. Le schede mostrano le stesse informazioni di prima, con il nome della sede preso da `sedi.json`, e conservano lo stile del tuo sito.

La pagina deve anche mostrare un messaggio mentre carica, quando non ci sono eventi e quando un file non si legge. Un evento con un `sede_id` sbagliato compare comunque, con un testo come «Sede da definire».

## 4. Meteo a Torino adesso

Un’**API** è un indirizzo che risponde con dati in JSON: si legge con `fetch` come i tuoi file, ma i dati arrivano da un altro sito e cambiano nel tempo. Open-Meteo, citata nella lezione 7, non richiede account né chiave. Apri questo indirizzo nel browser per vedere la risposta:

```text
https://api.open-meteo.com/v1/forecast?latitude=45.0703&longitude=7.6869&current=temperature_2m,wind_speed_10m&timezone=Europe%2FRome
```

In `info.html` aggiungi una sezione **Meteo a Torino adesso**, nello stile del tuo sito, che:

- mostri temperatura, vento e ora del dato;
- citi la fonte con un collegamento, per esempio «Dati meteo: Open-Meteo, licenza CC BY 4.0»;
- chiarisca che è il meteo di oggi, non la previsione per le date del festival;
- se la richiesta non riesce, mostri un messaggio senza bloccare il resto della pagina.

## 5. Verifica

Apri il sito con Live Preview, non con il doppio clic. Fai queste prove una alla volta, ripristinando ogni volta i file:

- Cambia il nome di una sede in `sedi.json`: cambia nelle schede dei suoi eventi.
- Metti `[]` in `eventi.json`: compare il messaggio di nessun evento.
- Rinomina `sedi.json`: compare il messaggio d’errore.
- Metti un `sede_id` inesistente: l’evento compare con «Sede da definire».
- Nell’indirizzo del meteo scrivi `temperatura_2m` al posto di `temperature_2m`: compare il messaggio d’errore del meteo, mentre galleria e mappa funzionano.

Controlla anche, a larghezza di telefono e di computer, che il resto del sito funzioni come prima.

## 6. AI e pubblicazione

Puoi usare un chatbot o lavorare sul codice. Fornisci schema e file aggiornati, chiedi una modifica alla volta e verifica il risultato. Non servono abbonamenti AI, Node.js, npm o un database.

Tieni un resoconto del lavoro con l’AI in `progettazione/resoconto-ai.md`: alla fine di ogni sessione aggiungi una sezione `## Sessione N` con un riassunto in pochi punti di come hai usato l’AI: che cosa hai chiesto, che cosa hai usato, modificato o scartato, come hai verificato, quali problemi hai avuto e come li hai risolti. Puoi farlo scrivere allo stesso chatbot con cui hai lavorato, poi rileggilo e correggilo. Non servono le conversazioni complete.

Aggiorna la stessa repository e le stesse GitHub Pages, con la moodboard e le pagine già realizzate. Prima di terminare controlla che i dati siano quelli corretti e verifica la versione pubblica.

La scadenza e la modalità di raccolta saranno comunicate dal docente.
