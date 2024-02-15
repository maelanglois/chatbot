import chatBot from './contact';
import viewContacts from '../views/contacts';
import viewBubble from '../views/chat-bubble';
import viewActiveChat from '../views/active-chat';
import viewChatBot from '../views/chatBot';
import viewChatUser from '../views/chatUser';

const Search = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];
    if (!sessionStorage.getItem('bot')) {
      sessionStorage.setItem('bot', 1);
    }

    this.run();
  }

  onKeyUp() {
    const elInputSearch = document.querySelector('.input-search');

    elInputSearch.addEventListener('keyup', () => {
      const keyWord = elInputSearch.value;
      const data = this.filters(
        'name',
        this.data,
        ({ user }) => user.name.first.includes(keyWord)
      );
    });
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
      document.querySelector('#a'.concat(k)).addEventListener('click', () => {
        document.querySelector('.header').innerHTML = viewActiveChat(k);
        document.querySelector('.messages').innerHTML = viewChatBot(k) + viewChatUser();
        for (let i = 0; i < length; i += 1) {
          document.querySelector('#a'.concat(i)).classList.remove('active');
        }
        document.querySelector('#a'.concat(k)).className += ' active';
        sessionStorage.setItem('bot', k);
      });
    }
    const b = parseInt(sessionStorage.getItem('bot'), 10);
    document.querySelector('.header').innerHTML = viewActiveChat(b);
    document.querySelector('.messages').innerHTML = viewChatBot(b) + viewChatUser();
    document.querySelector('#a'.concat(b)).className += ' active';
  }

  run() {
    this.data = chatBot();
    this.el.innerHTML = this.render();
    this.currentBot();
  }
};

export default Search;
