// Inizializzazione galleria Swiper
const swiper = new Swiper('.galleria-luoghi', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Caricamento meteo attuale a Torino tramite API Open-Meteo
async function caricaMeteoTorino() {
  const urlMeteo = 'https://api.open-meteo.com/v1/forecast?latitude=45.0703&longitude=7.6869&current=temperature_2m,wind_speed_10m&timezone=Europe%2FRome';

  const statoEl = document.getElementById('stato-meteo');
  const listaEl = document.getElementById('dati-meteo');
  const tempEl = document.getElementById('meteo-temperatura');
  const ventoEl = document.getElementById('meteo-vento');
  const oraEl = document.getElementById('meteo-ora');

  try {
    const risposta = await fetch(urlMeteo);
    if (!risposta.ok) {
      throw new Error('Risposta non valida dal servizio meteo.');
    }

    const dati = await risposta.json();
    const attuale = dati.current;
    const unita = dati.current_units || {};

    if (!attuale) {
      throw new Error('Dati correnti mancanti.');
    }

    const unitaTemp = unita.temperature_2m || '°C';
    const unitaVento = unita.wind_speed_10m || 'km/h';

    // Formatta la stringa ISO "2026-11-18T18:00" in data e ora leggibili
    let oraLeggibile = attuale.time;
    if (typeof attuale.time === 'string' && attuale.time.includes('T')) {
      const [dataPart, oraPart] = attuale.time.split('T');
      const [anno, mese, giorno] = dataPart.split('-');
      oraLeggibile = `${giorno}/${mese}/${anno}, ore ${oraPart}`;
    }

    tempEl.textContent = `${attuale.temperature_2m} ${unitaTemp}`;
    ventoEl.textContent = `${attuale.wind_speed_10m} ${unitaVento}`;
    oraEl.textContent = oraLeggibile;

    statoEl.hidden = true;
    listaEl.hidden = false;
  } catch (errore) {
    console.error(errore);
    listaEl.hidden = true;
    statoEl.hidden = false;
    statoEl.textContent = 'Impossibile caricare i dati meteo in questo momento.';
  }
}

caricaMeteoTorino();