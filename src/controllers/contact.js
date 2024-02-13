export default () => {
  function Bot(nom, image, statut) {
    this.nom = nom;
    this.image = image;
    this.statut = statut;
  }
  const bot1 = new Bot('Wall-e', 'https://static.wikia.nocookie.net/heros/images/6/61/EVE_.webp/revision/latest?cb=20230801175117&path-prefix=fr', 'online');
  const bot2 = new Bot('Bumblebee', 'https://www.madinjapan.fr/29785-large_default/transformers-statue-bumblebee-prime-1-studio.jpg', 'offline');
  const bot3 = new Bot('R2D2', 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=364%2C0%2C716%2C536', 'online');
  const cbot = [bot1, bot2, bot3];
  return cbot;
};
