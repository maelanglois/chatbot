import axios from 'axios';

import viewNav from '../views/nav';
import viewUser from '../views/user';

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
    });
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row">
          ${this.data.map((user) => viewUser(user)).join('')}
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
    const { results } = this.params;

    axios
      .get(`https://randomuser.me/api/0.8/?results=${results}`)
      .then((res) => {
        const { data } = res;
        const { age } = this.params;

        this.data = this.filters(
          parseInt(age, 10),
          data.results,
          ({ user }) => (
            new Date(
              new Date().getTime() - new Date(user.dob * 1000).getTime()
            ).getFullYear() - 1970 > age
          )
        );

        this.el.innerHTML = this.render();
        this.onKeyUp();
      });
  }
};

export default Search;
