import chatBot from './contact';
import viewContacts from '../views/contacts';
import viewBubble from '../views/chat-bubble';
import viewActiveChat from '../views/active-chat';
import Conversation from './conversation';

const Chat = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  render() {
    return `
      <div class="container-chat">
        <div class="chat-list">
          <div class="list-title">
            <span class="material-symbols-outlined">groups</span>
            <span class="list-text">Participants</span>
          </div>
          ${this.data.map((Bot) => viewContacts(Bot, this.data)).join('')}
        </div>
        <div class="chat">
          <div class="discussion" id="discussion">
            <div class="header">
            </div>
            <div class="messages">
            </div>
          </div>
          <div class="chat-content">
            ${viewBubble()}
          </div>
        </div>
      </div>
    `;
  }

  filters(param, data, filter) {
    let updateData = data;

    if (param) {
      updateData = updateData.filter(filter);
    }

    return updateData;
  }

  currentBot(conv) {
    if (conv) {
      const length = this.data.length;
      for (let k = 0; k < length; k += 1) {
        document.querySelector('#a'.concat(k)).classList.remove('active');
      }
      document.querySelector('.header').innerHTML = viewActiveChat(conv.currentBot.entity);
      document.querySelector('#a'.concat(conv.currentBot.currentBot)).className += ' active';
      const elInputSearch = document.querySelector('.chat-type');
      elInputSearch.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          console.log(conv.currentBot);
          for (let k = 0; k < length; k += 1) {
            document.querySelector('#a'.concat(k)).classList.remove('active');
          }
          document.querySelector('.header').innerHTML = viewActiveChat(conv.currentBot.entity);
          document.querySelector('#a'.concat(conv.currentBot.currentBot)).className += ' active';
        }
      });
      const submit = document.querySelector('#submit');
      submit.addEventListener('click', () => {
        console.log(conv.currentBot);
        for (let k = 0; k < length; k += 1) {
          document.querySelector('#a'.concat(k)).classList.remove('active');
        }
        document.querySelector('.header').innerHTML = viewActiveChat(conv.currentBot.entity);
        document.querySelector('#a'.concat(conv.currentBot.currentBot)).className += ' active';
      });
    }
  }

  run() {
    this.data = chatBot();
    this.el.innerHTML = this.render();
    const conv = new Conversation();
    this.currentBot(conv);
  }
};

export default Chat;
