import chatBot from './contact';

export default (keyword) => {
  const botFunct = []
  botFunct.bonjour = ['hello', 'bonjour', 'hola', 'salut', 'coucou'];
  botFunct.date = ['quel jour', 'date'];
  botFunct.heure = ['heure']
  botFunct.meteo = ['temps', 'meteo', 'météo'];
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

  return currentBot;
}

