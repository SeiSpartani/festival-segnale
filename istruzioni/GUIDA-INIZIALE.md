# Segnale — Guida iniziale

Realizzerai le prime due pagine di un festival immaginario. La base contiene testi, immagini, due schede evento e uno stile iniziale. Alcuni collegamenti sono ancora da completare e le schede non hanno ancora una disposizione a griglia.

## 1. Apri il sito

1. Estrai completamente lo ZIP in una cartella sul tuo computer. Non lavorare dentro l'archivio compresso.
2. In VS Code usa **File → Apri cartella / Open Folder** e scegli la cartella che contiene direttamente `index.html`, `programma.html` e `style.css`. Non una cartella esterna che contiene a sua volta `festival-segnale`, né la sottocartella `istruzioni`.
3. Se compare Restricted Mode, autorizza la cartella dopo aver controllato che sia il materiale del corso: **Manage → Workspace Trust → Trust**. Le diciture possono variare con la lingua di VS Code.
4. Apri `index.html` e avvia Live Preview di Microsoft. Puoi anche aprire direttamente l'HTML nel browser: in questa attività non usiamo JavaScript o richieste a dati esterni.
5. Per vedere subito il Programma, apri `programma.html`: i collegamenti da completare non portano ancora all'altra pagina.

```text
festival-segnale/
├── index.html
├── programma.html
├── style.css
├── assets/
└── istruzioni/
    ├── GUIDA-INIZIALE.md
    ├── CONSEGNA.md
    ├── CONTENUTI-EVENTI.md
    └── PROMPT-DEMO.md
```

## 2. Obiettivo della demo

Collegare le pagine, osservare il CSS condiviso e disporre le due schede con Grid: una colonna sotto 600 px e due da 600 px in su. Nel richiamo iniziale osserveremo anche colori, font e variabili CSS già predisposte. Non viene distribuita la soluzione della demo. I prompt sono esempi: controlla sempre la risposta prima di applicarla.

### Dove sono definite le scelte comuni

All'inizio di `style.css`, il blocco `:root` contiene sei variabili CSS:

| Variabile | Uso |
| --- | --- |
| `--colore-primario` | Collegamenti e sfondo del pulsante; nella demo la useremo anche per il bordo dell'intestazione. |
| `--colore-primario-scuro` | Sfondo del pulsante quando ci passi sopra con il mouse, cioè nello stato hover. |
| `--colore-sfondo` | Sfondo generale della pagina. |
| `--colore-testo` | Colore di base del testo, del marchio e degli indicatori di focus. |
| `--font-testo` | Elenco dei caratteri per il testo. |
| `--font-titoli` | Elenco dei caratteri per i titoli. |

Le regole richiamano quei valori con `var()`, per esempio `color: var(--colore-primario);`. Cambiare una variabile aggiorna soltanto le regole che la utilizzano; le altre scelte e i colori delle illustrazioni SVG non cambiano automaticamente. Il colore hover è separato: non viene calcolato a partire dal principale.

## 3. Quale documento leggere

I quattro documenti Markdown sono nella sottocartella `istruzioni/`. HTML, CSS e immagini restano nella cartella del sito; apri quella cartella completa in VS Code.

- [CONSEGNA.md](CONSEGNA.md): requisiti dell'esercizio, pubblicazione e promemoria sul lavoro con l'AI.
- [CONTENUTI-EVENTI.md](CONTENUTI-EVENTI.md): dati, testi e immagini degli eventi da aggiungere.
- [PROMPT-DEMO.md](PROMPT-DEMO.md): richieste usate nella demo, da consultare e adattare al codice corrente.

Questa guida iniziale serve per aprire il progetto e orientarti nella base. Per il lavoro delle due settimane fai riferimento a CONSEGNA.md.
