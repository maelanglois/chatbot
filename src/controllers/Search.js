import viewNav from '../views/nav';
import chatBot from './contact';
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
          ${this.data.map((Bot) => viewContacts(Bot)).join('')}
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
