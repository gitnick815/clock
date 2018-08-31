const coilSec = document.querySelector('.coil-Sec');
const coilMin = document.querySelector('.coil-Min');
const coilHour = document.querySelector('.coil-Hour');

function setDate() {
    const today = new Date();

    const seconds = today.getSeconds();
    const secondsDegress = ((seconds / 60) * 360);
    coilSec.style.transform = `rotate(${secondsDegress}deg)`;

    const mins = today.getMinutes();
    const minsDegress = ((mins / 60) * 360);
    coilMin.style.transform = `rotate(${minsDegress}deg)`;

    const hour = today.getHours();
    const hourDegress = ((hour / 12) * 360);
    coilHour.style.transform = `rotate(${hourDegress}deg)`;
}
// 定時器
setInterval(setDate, 1000);