let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    // Getting hour, minute, and second from date 
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourRotation = 30 * hour + minute / 2;
    let minuteRotation = 6 * minute;
    let secondRotation = 6 * second;

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(displayTime, 1000);
