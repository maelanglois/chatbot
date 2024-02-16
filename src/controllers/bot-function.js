import chatBot from './contact';

export default (keyword) => {
  const retour = [];
  retour.bot=[];
  retour.response=[];

  const botFunct = []
  botFunct.bonjour = ['hello', 'bonjour', 'hola', 'salut', 'coucou'];
  botFunct.date = ['quel jour', 'date'];
  botFunct.heure = ['heure']
  botFunct.meteo = ['temps', 'meteo', 'météo'];

  function bonjour() {
    return 'Bonjour,'
  }

  function date() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `Nous sommes le ${day} ${month} ${year}`;
  }

  function heure() {
    const now = new Date(); 
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `Il est ${hour}h${minutes}`
  }

  function meteo(){
    return 'Il fait beau ! :sunglasses:'
  }

  const response = [];
  response.bonjour = new bonjour();
  response.date = new date();
  response.heure = new heure();
  response.meteo = new meteo();

  const data = chatBot();
  let botAction = []
  let currentBot = data.map((Bot) => Bot);
  for (let i = 0; i < data.length; i += 1) {
    currentBot = currentBot[i];
    const {
      action
    } = currentBot;
    action.forEach((element) => { 
      if(element == keyword) {
        botAction += i;
      }
    })
  }
  const iterator = botFunct.keys();
  for (const key of iterator) {
    botFunct[key].map( (e) => {
      if( keyword == e) {
        retour.response += response[key];
      }
    })
  }

  return currentBot;
}

