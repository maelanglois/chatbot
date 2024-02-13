export default (data) => {
  const {
    nom,
    statut,
    image
  } = data;

  return `
    <div class="list-bot active">
      <img src="${image}" class="list-avatar" alt="...">
      <div class="list-infos">
        <div class="list-pseudo">${nom}</div>
        <div class="list-statut">${statut}</div>
      </div>
    </div>
  `;
};
