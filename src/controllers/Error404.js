const Quatre04 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return '<h1>404</h1>';
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Quatre04;
