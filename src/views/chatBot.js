export default (bot, message) => {
  const {
    name,
    picture
  } = bot;
  const date = new Date().toLocaleString();

  return `
  <div class="bubble-display">
    <img src="${picture}" class="list-avatar"/>
    <div class="bubble-sent bot">
        <div class="pseudo">
          <div class="bubble-pseudo">${name}</div>
          <div class="date">${date}</div>
        </div>
        <div class="bubble-bubble-ia">${message}</div>
    </div>
  </div>
 `;
};
