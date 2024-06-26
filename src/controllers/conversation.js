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
        if (elInputSearch.value !== '') {
          const keyWords = elInputSearch.value;
          this.user += keyWords;
          const user = viewChatUser(keyWords);
          this.conversation += user;
          elInputSearch.value = '';
          const arrKeywords = keyWords.split(' ');
          this.el.innerHTML = this.conversation;
          this.botScore = 0
          this.bots.forEach((bot) => {
            this.botAction(bot, arrKeywords);
          });
          if (this.botScore === 0){
            this.bots.forEach((bot) => {
              const help = 'help';
              const arrHelp = help.split(' ');
              this.botAction(bot, arrHelp);
            });
          }
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
        this.botScore = 0
        this.bots.forEach((bot) => {
          this.botAction(bot, arrKeywords);
        });
        if (this.botScore === 0){
          this.bots.forEach((bot) => {
            const help = 'help';
            const arrHelp = help.split(' ');
            this.botAction(bot, arrHelp);
          });
        }
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
        this.botScore += 1
      } 
    });
  }

  run() {
    this.userMessage();
    this.el.innerHTML = this.conversation;
  }
};

export default Conversation;
