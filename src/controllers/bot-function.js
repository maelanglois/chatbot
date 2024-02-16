import chatBot from './contact';

export default (keyword) => {
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
