import activeBot from '../controllers/active-bot';

export default (k) => {
  const currentBot = activeBot(k);
  const {
    nom,
    image
  } = currentBot;

  return `
  <div class="bubble-display">
    <img src="${image}" class="list-avatar"/>
    <div class="bubble-sent bot">
        <div class="pseudo">
          <div class="bubble-pseudo">${nom}</div>
          <div class="date">00.00.00 à 00:13</div>
        </div>
        <div class="bubble-bubble-ia"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis finibus lobortis. Praesent vitae consectetur libero. Etiam ac ex varius, volutpat augue eu, feugiat tellus. Nullam porttitor nec neque vitae porttitor. In quis purus in eros blandit porttitor vitae sed sapien. Donec sit amet ultrices arcu, in fringilla enim.</div>
    </div>
  </div>
 `;
};
