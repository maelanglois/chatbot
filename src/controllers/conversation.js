import viewChatUser from '../views/chatUser';
import chatBot from './contact';

const Conversation = class {
  constructor() {
    this.el = document.querySelector('.messages');
    this.user = [];
    this.bots = chatBot();
    this.conversation = '';

    this.run();
  }

  /* Show the message the user sends on "click" or "enter" */

  userMessage() {
    const elInputSearch = document.querySelector('.chat-type');
    console.log(elInputSearch);
    elInputSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        if (elInputSearch.value !== '') {
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
          this.el.scrollTop = this.el.scrollHeight;
        }
      }
    });
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
      if (elInputSearch.value !== '') {
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
        this.el.scrollTop = this.el.scrollHeight;
      }
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
    this.el.innerHTML = this.conversation;
  }
};

export default Conversation;
