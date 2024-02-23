export default (data) => {
  const {
    nom,
    image,
    statut,
    nombre
  } = data.entity;

  return `
    <div class="list-bot" value="${nombre}" id="a${nombre}">
      <img src="${image}" class="list-avatar" alt="...">
      <div class="list-infos">
        <div class="list-pseudo">${nom}</div>
        <div class="list-statut">${statut}</div>
      </div>
    </div>
  `;
};
