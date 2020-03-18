let time = document.getElementById('clock');

function clock(){
    setInterval(_=> {
        let date = new Date();
        let hours = date.getHours() % 12;
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let AmorPm = date.getHours() > 12 ? 'PM' : 'AM';
        time.innerHTML = `<h1>${hours}:${minutes}:${seconds} ${AmorPm}</h1>`;    
    }, 1000);
}
clock();