
setInterval(setClock, 1000);
const hourhand = document.querySelector('[data-hour-hand]');
const minutehand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]');
function setClock() {
    const date = new Date();
    const second = (date.getSeconds()) / 60;
    const minute = (second + date.getMinutes())/60;
    const hour = (minute + date.getHours())/12;
    setRotation(hourhand, hour);
    setRotation(minutehand, minute);
    setRotation(secondhand, second);
}
function setRotation (element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();