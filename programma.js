// Formatta la data ISO ("2026-06-12") nel formato leggibile del sito ("Venerdì 12 giugno")
function formattaData(dataIso) {
  const parti = dataIso.split('-');
  if (parti.length !== 3) return dataIso;

  const dataObj = new Date(Number(parti[0]), Number(parti[1]) - 1, Number(parti[2]));
  const formattata = dataObj.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return formattata.charAt(0).toUpperCase() + formattata.slice(1);
}

async function caricaProgramma() {
  const statoEl = document.getElementById('stato-programma');
  const grigliaEl = document.getElementById('griglia-eventi');

  try {
    // Caricamento parallelo dei due file JSON
    const [rispostaEventi, rispostaSedi] = await Promise.all([
      fetch('dati/eventi.json'),
      fetch('dati/sedi.json')
    ]);

    // Verifica che entrambi i file siano stati letti correttamente
    if (!rispostaEventi.ok || !rispostaSedi.ok) {
      throw new Error('Errore nel caricamento dei file JSON.');
    }

    const eventi = await rispostaEventi.json();
    const sedi = await rispostaSedi.json();

    // Gestione elenco vuoto
    if (!Array.isArray(eventi) || eventi.length === 0) {
      statoEl.textContent = 'Nessun evento in programma al momento.';
      return;
    }

    // Mappa rapida id -> nome sede (es. 1 -> "Officina Nord — Sede centrale")
    const mappaSedi = new Map();
    if (Array.isArray(sedi)) {
      sedi.forEach((sede) => {
        mappaSedi.set(sede.id, sede.nome);
      });
    }

    // Nasconde il messaggio di caricamento e svuota la griglia
    statoEl.hidden = true;
    grigliaEl.innerHTML = '';

    // Costruzione sicura delle schede tramite DOM API
    eventi.forEach((evento) => {
      const article = document.createElement('article');
      article.className = 'event-card';

      const img = document.createElement('img');
      img.src = evento.immagine;
      img.alt = evento.immagine_alt || '';
      img.width = 900;
      img.height = 600;

      const body = document.createElement('div');
      body.className = 'event-body';

      const meta = document.createElement('p');
      meta.className = 'event-meta';
      meta.textContent = `${formattaData(evento.data)} · ${evento.orario} · ${evento.categoria}`;

      const titolo = document.createElement('h3');
      titolo.textContent = evento.titolo;

      const descrizione = document.createElement('p');
      descrizione.textContent = evento.descrizione;

      const luogo = document.createElement('p');
      luogo.className = 'event-place';
      const strongSede = document.createElement('strong');
      strongSede.textContent = 'Sede: ';

      // Se sede_id non esiste in sedi.json, mostra il testo di riserva
      const nomeSede = mappaSedi.get(evento.sede_id) || 'Sede da definire';
      luogo.append(strongSede, document.createTextNode(nomeSede));

      body.append(meta, titolo, descrizione, luogo);
      article.append(img, body);
      grigliaEl.appendChild(article);
    });
  } catch (errore) {
    console.error(errore);
    statoEl.hidden = false;
    statoEl.textContent = 'Impossibile caricare il programma. Riprova più tardi.';
  }
}

caricaProgramma();