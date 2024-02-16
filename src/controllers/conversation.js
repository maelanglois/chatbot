import chatBot from '../views/chatBot';
import viewChatUser from '../views/chatUser';
import botFunct from './bot-function';

const Conversation = class {
  constructor() {
    this.el = document.querySelector('.messages');
    this.bot1 = [];
    this.bot2 = [];
    this.bot3 = [];
    this.user = [];
    this.currentBot = 1;
    this.conversation = '';

    this.run();
  }

  userMessage() {
    const elInputSearch = document.querySelector('.chat-type');
    elInputSearch.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const keyWord = elInputSearch.value;
        this.user += keyWord;
        const user = viewChatUser(keyWord);
        this.conversation += user;
        elInputSearch.value = '';
        this.el.innerHTML = this.conversation;
        console.log(botFunct);
      }
    });
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
      const keyWord = elInputSearch.value;
      this.user += keyWord;
      const user = viewChatUser(keyWord);
      this.conversation += user;
      elInputSearch.value = '';
      this.el.innerHTML = this.conversation;
    });
  }

  bot1Mess() {
    const message = chatBot(0);
    this.currentBot = 0;
    this.bot1 += message;
    this.conversation += message;
  }

  bot2Mess() {
    const message = chatBot(1);
    this.currentBot = 1;
    this.bot2 += message;
    this.conversation += message;
  }

  bot3Mess() {
    const message = chatBot(2);
    this.currentBot = 2;
    this.bot3 += message;
    this.conversation += message;
  }

  thisBot(bot) {
    sessionStorage.setItem('bot', bot);
  }

  run() {
    this.userMessage();
    this.bot1Mess();
    this.bot2Mess();
    this.bot3Mess();
    this.el.innerHTML = this.conversation;
    this.thisBot(this.currentBot);
  }
};

export default Conversation;
