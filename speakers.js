/*
  ELENCO SPEAKER — Hermetic Path Sound Studio
  ===========================================
  Per aggiungere uno speaker:
    1. Metti la foto in   speakers/foto/   (JPG, formato verticale 4:5, es. 800×1000 px)
    2. Metti i demo in    speakers/audio/  (MP3, 128–192 kbps)
    3. Copia il blocco di esempio qui sotto, togli i "//" davanti alle righe e compila i campi.

  Campi:
    name   : nome e cognome
    lang   : "it", "de" o "en" — oppure più lingue: ["de", "it"]
    photo  : percorso della foto (se manca, si vedono le iniziali)
    voice  : breve descrizione della voce, nelle tre lingue del sito
    demos  : uno o più demo, ognuno con titolo (nelle tre lingue) e file audio

  Finché per una lingua non c'è nessuno speaker, il sito mostra una scheda "in arrivo".
*/

window.SPEAKERS = [

  // {
  //   name: "Nome Cognome",
  //   lang: "de",
  //   photo: "speakers/foto/nome-cognome.jpg",
  //   voice: {
  //     it: "Voce femminile, calda e chiara",
  //     de: "Weibliche Stimme, warm und klar",
  //     en: "Female voice, warm and clear"
  //   },
  //   demos: [
  //     { title: { it: "Spot pubblicitario", de: "Werbespot", en: "Commercial" },  file: "speakers/audio/nome-cognome-spot.mp3" },
  //     { title: { it: "Documentario",       de: "Dokumentarfilm", en: "Documentary" }, file: "speakers/audio/nome-cognome-doku.mp3" }
  //   ]
  // },

];
