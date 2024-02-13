export default (data) => {
  const {
    name,
    statut,
    picture
  } = data;

  return `
    <div class="col-3">
      <div class="card">
        <img src="${picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${statut}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;
};
