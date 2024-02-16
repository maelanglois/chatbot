import activeBot from '../controllers/active-bot';

export default (k, message) => {
  const currentBot = activeBot(k);
  const nom = currentBot.getNom();
  const image = currentBot.getImage();
  const statut = currentBot.getStatut();
  const date = new Date().toLocaleString();

  return `
  <div class="bubble-display">
    <img src="${image}" class="list-avatar"/>
    <div class="bubble-sent bot">
        <div class="pseudo">
          <div class="bubble-pseudo">${nom}</div>
          <div class="date">${date}</div>
        </div>
        <div class="bubble-bubble-ia">${message}</div>
    </div>
  </div>
 `;
};
