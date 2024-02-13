export default () => {
  function Bot(nom, image, statut) {
    this.nom = nom;
    this.image = image;
    this.statut = statut;
  };
  let bot1 = new Bot('Wall-e', 'https://static.wikia.nocookie.net/heros/images/6/61/EVE_.webp/revision/latest?cb=20230801175117&path-prefix=fr', 'online');
  let bot = {bot : (bot1)};
  return bot;
}
