export default (bot) => {
  const {
    name,
    picture,
    status
  } = bot;

  return `
      <img src="${picture}" class="list-avatar"/>
      <div class="list-infos">
        <div class="list-pseudo">${name}</div>
        <div class="list-statut">${status}</div>
      </div>
  `;
};
