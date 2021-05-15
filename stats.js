function update() {
    fetch('stats.json').then(response => response.json()).then(data => {
        document.all['players'].textContent = String(data.players);
        document.all['years'].textContent   = String(data.years);
        document.all['months'].textContent  = String(data.months);
        document.all['size'].textContent    = String(data.size);
        document.all['days'].textContent    = String(data.days);
    });
}

window.onload = function() {
    update();
    setTimeout(function() {
         document.body.style.backgroundImage = 'url("/assets/renderl.jpg")';
    }, 1000);
    setInterval(update, 60000);
};
