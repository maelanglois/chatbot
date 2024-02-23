import viewChatUser from '../views/chatUser';
import chatBot from './contact';

const Conversation = class {
  constructor() {
    this.el = document.querySelector('.messages');
    this.user = [];
    this.currentBot = chatBot().shift();
    this.conversation = '';
    this.bots = chatBot();

    this.run();
  }

  /* Show the message the user sends on "click" or "enter" */

  userMessage() {
    const elInputSearch = document.querySelector('.chat-type');
    elInputSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const keyWords = elInputSearch.value;
        this.user += keyWords;
        const user = viewChatUser(keyWords);
        this.conversation += user;
        elInputSearch.value = '';
        const arrKeywords = keyWords.split(' ');
        this.el.innerHTML = this.conversation;
        this.bots.forEach((bot) => {
          this.botAction(bot, arrKeywords);
        });
      }
    });
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
      const keyWords = elInputSearch.value;
      this.user += keyWords;
      const user = viewChatUser(keyWords);
      this.conversation += user;
      elInputSearch.value = '';
      const arrKeywords = keyWords.split(' ');
      this.el.innerHTML = this.conversation;
      this.bots.forEach((bot) => {
        this.botAction(bot, arrKeywords);
      });
      return this.currentBot;
    });
  }

  /* Searching if any word sent by the user allows an action to the bot */

  botAction(bot, keywords) {
    keywords.forEach((element) => {
      if (bot.thisAction(element)) {
        this.conversation += bot.thisAction(element);
        this.el.innerHTML = this.conversation;
        this.currentBot = bot;
      }
    });
  }

  run() {
    this.userMessage();
    this.el.innerHTML = this.conversation;
  }
};

export default Conversation;
