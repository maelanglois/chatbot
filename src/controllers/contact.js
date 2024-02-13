export default () => {
  function Bot(nom, image, statut) {
    this.nom = nom;
    this.image = image;
    this.statut = statut;
  }
  const bot1 = new Bot('Wall-e', 'https://www.macplus.net/app/uploads/2008/05/jpg_wall_e_eve.jpg', 'online');
  return bot1;
};
