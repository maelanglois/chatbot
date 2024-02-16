export default (data) => {
  const nom = data.getNom();
  const image = data.getImage();
  const statut = data.getStatut();
  const nombre = data.getNombre();

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
