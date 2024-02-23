export default (bot, message) => {
  const {
    nom, 
    image
  } = bot;
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
