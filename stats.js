function update() {
    const players = document.getElementById('players');
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');
    const size = document.getElementById('size');

    fetch('stats.php').then(function (response) { return response.json(); }).then(function (data) {
        players.textContent = data.players;
        years.textContent = data.years;
        months.textContent = data.months;
        days.textContent = data.days;
        size.textContent = data.size;
    });
}

update()

function startUpdate(){
    setInterval(function () { update(); }, 200);
}