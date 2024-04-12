export default (data) => {
  const {
    name,
    picture,
    status,
    id
  } = data.entity;

  return `
    <div class="list-bot" value="${id}" id="a${id}">
      <img src="${picture}" class="list-avatar" alt="...">
      <div class="list-infos">
        <div class="list-pseudo">${name}</div>
        <div class="list-statut">${status}</div>
      </div>
    </div>
  `;
};
