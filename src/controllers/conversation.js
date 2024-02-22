import viewChatUser from '../views/chatUser';
import chatBot from './contact';

const Conversation = class {
  constructor() {
    this.el = document.querySelector('.messages');
    this.user = [];
    this.currentBot = 0;
    this.conversation = '';

    this.run();
  }

  userMessage() {
    const bots = chatBot();
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
        bots.forEach((bot) => {
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
      bots.forEach((bot) => {
        this.botAction(bot, arrKeywords);
      });
      return this.currentBot;
    });
  }

  botAction(bot, keywords) {
    keywords.forEach((element) => {
      if (bot.thisAction(element)) {
        this.conversation += bot.thisAction(element);
        this.el.innerHTML = this.conversation;
        this.currentBot = bot.currentBot;
        sessionStorage.setItem('bot', this.currentBot);
      }
    });
  }

  run() {
    this.userMessage();
    this.el.innerHTML = this.conversation;
  }
};

export default Conversation;
