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

/* <div class="col-3">
      <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nom}</h5>
          <p class="card-text">${statut}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> */