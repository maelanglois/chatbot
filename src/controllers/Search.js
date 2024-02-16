import chatBot from './contact';
import viewContacts from '../views/contacts';
import viewBubble from '../views/chat-bubble';
import viewActiveChat from '../views/active-chat';
import viewChatBot from '../views/chatBot';
import viewChatUser from '../views/chatUser';
import conversation from './conversation';

const Search = class {
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
            <span class="material-symbols-outlined">mail</span>
            <span class="list-text">Vos messages</span>
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

  currentBot() {
    const length = this.data.length;
    for (let k = 0; k < length; k += 1) {
      document.querySelector('#a'.concat(k)).classList.remove('active');
    }
    const b = parseInt(sessionStorage.getItem('bot'), 10);
    document.querySelector('.header').innerHTML = viewActiveChat(b);
    document.querySelector('#a'.concat(b)).className += ' active';
  }

  run() {
    this.data = chatBot();
    this.el.innerHTML = this.render();
    new conversation();    
    this.currentBot();
  }
};

export default Search;
