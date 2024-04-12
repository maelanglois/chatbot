import axios from 'axios';
import viewChatBot from '../views/chatBot';

/* Creating the bots */

export default () => {
  const Action = class Action {
    constructor(entity) {
      this.entity = entity;
      this.id = entity.id;
      this.name = entity.name;
      this.results();
      this.words = this.wordsAssociated();
    }

    results() {
      if (this.name === 'Bonjour') {
        this.result = bonjour();
      } else if (this.name === 'Date') {
        this.result = date();
      } else if (this.name === 'Heure') {
        this.result = heure();
      } else if (this.name === 'Météo') {
        this.result = meteo();
      } else if (this.name === 'Blagues') {
        this.result = blague();
      } else if (this.name === 'HTTP Chat') {
        this.result = httpcat();
      } else if (this.name === 'Help') {
        this.result = help();
      }
    }

    wordsAssociated() {
      async function loadWords(id) {
        const words = [];
        const reponse = await fetch('http://localhost/words');
        const all = await reponse.json();
        all.map((word) => {
          if (word.action_id === id) {
            words.push(word.word);
          }
        });
        return words;
      }
      const wordsAss = loadWords(this.id);
      return wordsAss;
    }
  };

  const Bot = class Bot {
    constructor(entity) {
      this.entity = entity;
      this.id = entity.id;
      this.actions = this.actionsLoad();
      this.thisAction();
      this.currentBot = this.defaultBot();
      console.log(this.currentBot);
    }

    actionsLoad() {
      async function loadActions() {
        const actions = [];
        const reponse = await fetch('http://localhost/actions');
        const one = await reponse.json();
        one.map((action) => actions.push(new Action(action)));
        return actions;
      }
      const allActions = loadActions();
      return allActions;
    }

    defaultBot() {
      async function loadBot() {
        const reponse = await fetch('http://localhost/user/1');
        const entity = await reponse.json();
        const bot = new Bot(entity);
        return bot;
        
      }
      const bot = loadBot();
      return bot
    }
    /* Bot answering if asked something he knows how to respond to */

    thisAction(mot) {
      const result = viewChatBot(this.entity, mot);
      return result;
      /*  async function actionResult(unMot, actions, entity){
        let result = '';
        actions
        .then((all_actions)=>{
          all_actions.map((action)=> {
            action.words
            .then((word)=>{
              if (strNoAccent(unMot.toLowerCase()) === word) {
                result += viewChatBot(entity, action.result);
                console.log(result);
              }
            })
          })
        })
        return result;
      }
      const resultat = actionResult('bonjour', this.actions, this.entity);
      console.log(resultat);
      return resultat; */
    }


  };

  /* Getting the meteo api depending on the code the api gives us */

  function meteo() {
    const tab = [];
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        axios.get(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${long}&&fields=code&format=json&geometry=centre`)
          .then((response) => {
            const { data } = response;
            const { code } = data[0];
            axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=eb04c30ea6c2690fadb84ccd77cb59b701b2be447dce9273e235a1014815a673&insee=${code}`)
              .then((res) => {
                const { forecast } = res.data;
                const { weather } = forecast;
                axios.get(`http://localhost/meteo/${weather}`)
                  .then((e) => tab.push(e.data.description));
                resolve(weather);
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
    return tab;
  }

  function bonjour() {
    const result = 'Bonjour';
    return result;
  }

  function heure() {
    const result = new Date().toLocaleTimeString();
    return result;
  }

  function date() {
    const result = new Date().toLocaleDateString();
    return result;
  }

  function help() {

  }

  function blague() {

  }

  function httpcat() {

  }

  /*   function strNoAccent(a) {
    return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } */

  /* Each bot created and their commands */

  async function loadBots() {
    const bots = [];
    const reponse = await fetch('http://localhost/users');
    const entitys = await reponse.json();
    entitys.map((bot) => bots.push(new Bot(bot)));
    return bots;
  }

  const bots = loadBots();

  return bots;
};
