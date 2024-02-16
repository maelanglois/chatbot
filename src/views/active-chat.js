import activeBot from '../controllers/active-bot';

export default (k) => {
  const currentBot = activeBot(k);
  const nom = currentBot.getNom();
  const image = currentBot.getImage();
  const statut = currentBot.getStatut();

  return `
      <img src="${image}" class="list-avatar"/>
      <div class="list-infos">
        <div class="list-pseudo">${nom}</div>
        <div class="list-statut">${statut}</div>
      </div>
  `;
};
