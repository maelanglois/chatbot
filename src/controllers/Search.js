/* import axios from 'axios'; */

import viewNav from '../views/nav';
/* import viewUser from '../views/user';
 */
/* import viewChat from '../views/chat'; */
import Bot from './contact';
import viewContacts from '../views/contacts';

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

      console.log(data);
      console.log(this.data);
    });
  }

  render() {
    return `
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
      <div class="container-chat">
        <div>
          ${viewContacts(this.data)}
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
    this.data = Bot();
    console.log(this.data);

    this.el.innerHTML = this.render();
  }
};

export default Search;
