export default (message) => (`
<div class="bubble-display-user">
    <div class="bubble-sent user">
        <div class="pseudo">
            <div class="date">${new Date().toLocaleString()}</div>
            <div class="bubble-pseudo">Moi</div>
        </div>
        <span class="bubble-bubble-user"> ${message} </span>
    </div>
    <img src="https://www.macplus.net/app/uploads/2008/05/jpg_wall_e_eve.jpg" class="list-avatar"/>
</div>
`);
