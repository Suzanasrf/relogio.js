let hora= document.querySelector('#clock');


function formateTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateClock() {
    const now = new Date();
   const hours =  formateTime(now.getHours())
    const minutes =  formateTime(now.getMinutes())
    const seconds = formateTime(now.getSeconds())
    const timeString = `${hours}:${minutes}:${seconds}`
    hora.textContent = timeString;

}

updateClock()

setInterval(updateClock, 1000)