export default (message) => (`
<div class="bubble-display-user">
    <div class="bubble-sent user">
        <div class="pseudo">
            <div class="date">00.00.00 à 00:13</div>
            <div class="bubble-pseudo">Pseudo utilisateur</div>
        </div>
        <span class="bubble-bubble-user"> ${message} </span>
    </div>
    <img src="https://www.macplus.net/app/uploads/2008/05/jpg_wall_e_eve.jpg" class="list-avatar"/>
</div>
`);
