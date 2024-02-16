export default () => {
  function Bot(nom, image, statut, number, action) {
    this.nom = nom;
    this.image = image;
    this.statut = statut;
    this.number = number;
    this.action = action;
  }
  const bot1 = new Bot('Wall-e', 'https://www.macplus.net/app/uploads/2008/05/jpg_wall_e_eve.jpg', 'Directive ?', 0, ['bonjour', 'heure']);
  const bot2 = new Bot('Bumblebee', 'https://www.madinjapan.fr/29785-large_default/transformers-statue-bumblebee-prime-1-studio.jpg', "Sorry I'm late, hit a little traffic.", 1, ['bonjour', 'date']);
  const bot3 = new Bot('R2D2', 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=364%2C0%2C716%2C536', 'beep boop beep', 2, ['bonjour', 'meteo']);
  const cbot = [bot1, bot2, bot3];

  return cbot;
};
