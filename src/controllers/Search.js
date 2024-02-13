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
          ${this.data.map((Bot) => viewContacts(Bot)).join('')}
        </div>
        <div class="chat">
          <div class="discussion">
            ${viewActiveChat()}
            <div class="messages">
              ${viewChatBot()}
              ${viewChatUser()}
              ${viewChatBot()}
              ${viewChatUser()}
              ${viewChatBot()}
              ${viewChatUser()}
              ${viewChatBot()}
              ${viewChatUser()}
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

  run() {
    this.data = chatBot();
    this.el.innerHTML = this.render();
  }
};

export default Search;
