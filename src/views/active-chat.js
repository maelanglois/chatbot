export default (bot) => {
  const {
    nom,
    image,
    statut
  } = bot;

  return `
      <img src="${image}" class="list-avatar"/>
      <div class="list-infos">
        <div class="list-pseudo">${nom}</div>
        <div class="list-statut">${statut}</div>
      </div>
  `;
};
