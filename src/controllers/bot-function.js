import chatBot from './contact';

export default (keyword) => {
  const retour = [];
  retour.bot = [];
  retour.response = [];

  const botFunct = [];
  botFunct.bonjour = ['hello', 'bonjour', 'hola', 'salut', 'coucou'];
  botFunct.date = ['jour', 'date'];
  botFunct.heure = ['heure'];
  botFunct.meteo = ['temps', 'meteo', 'météo'];

  function bonjour() {
    return 'Bonjour,';
  }

  function date() {
    const dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth();
    const year = dateNow.getFullYear();
    return `Nous sommes le ${day} ${month} ${year}`;
  }

  function heure() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `Il est ${hour}h${minutes}`;
  }

  function meteo() {
    return 'Il fait beau ! :sunglasses:';
  }

  const response = [];
  response.bonjour = bonjour();
  response.date = date();
  response.heure = heure();
  response.meteo = meteo();

  const data = chatBot();
  let currentBot = data.map((Bot) => Bot);
  for (let i = 0; i < data.length; i += 1) {
    currentBot = currentBot[i];
    const {
      action
    } = currentBot;
    action.forEach((element) => {
      if (element === keyword) {
        retour.bot += i;
      }
    });
  }
  const iterator = botFunct.keys();
  for (const key of iterator) {
    console.log(botFunct[key]);
  /*  botFunct[key].map( (e) => {
      if( keyword == e) {
        retour.response += response[key];
      }
    }) */
  }

  return retour;
};
