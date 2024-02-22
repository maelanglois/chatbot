import viewChatBot from '../views/chatBot';
import meteo from './meteo';

export default () => {
  const Bot = class Bot {
    constructor(entity) {
      this.entity = entity;
      this.currentBot = 0;
    }

    thisAction(word) {
      const { actions } = this.entity;
      let result = '';
      actions.forEach((action) => {
        const { mots } = action;
        mots.forEach((mot) => {
          if (mot === word) {
            result += viewChatBot(this.getNombre(), action.result);
            this.currentBot = this.getNombre();
          }
        });
      });
      return result;
    }

    getNom() {
      const { nom } = this.entity;
      return nom;
    }

    getImage() {
      const { image } = this.entity;
      return image;
    }

    getStatut() {
      const { statut } = this.entity;
      return statut;
    }

    getNombre() {
      const { nombre } = this.entity;
      return nombre;
    }

    getActions() {
      const { actions } = this.entity;
      return actions;
    }
  };

  const entitys = [{
    nom: 'Wall-e',
    image: 'https://www.macplus.net/app/uploads/2008/05/jpg_wall_e_eve.jpg',
    statut: 'Directive ?',
    nombre: 0,
    actions: [{
      nom: 'bonjour',
      mots: ['bonjour', 'Bonjour', 'Hello', 'hello', 'Salut', 'salut', 'Coucou', 'coucou'],
      result: 'Bonjour'
    }, {
      nom: 'date',
      mots: ['Jour', 'jour', 'date'],
      result: new Date().toLocaleDateString()
    }]
  }, {
    nom: 'Bumblebee',
    image: 'https://www.madinjapan.fr/29785-large_default/transformers-statue-bumblebee-prime-1-studio.jpg',
    statut: "Sorry I'm late, hit a little traffic.",
    nombre: 1,
    actions: [{
      nom: 'heure',
      mots: ['heure', 'Heure'],
      result: new Date().toLocaleTimeString()
    }, {
      nom: 'bonjour',
      mots: ['bonjour', 'Bonjour', 'Hello', 'hello', 'Salut', 'salut', 'Coucou', 'coucou'],
      result: 'Bonjour'
    }]
  }, {
    nom: 'R2D2',
    image: 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=364%2C0%2C716%2C536',
    statut: 'beep boop beep',
    nombre: 2,
    actions: [{
      nom: 'heure',
      mots: ['heure', 'Heure'],
      result: new Date().toLocaleTimeString()
    }, {
      nom: 'meteo',
      mots: ['meteo', 'temps', 'Meteo', 'météo', 'Météo'],
      result: console.log(meteo())
    }]
  }];
  const bots = entitys.map((bot) => new Bot(bot));

  return bots;
};
