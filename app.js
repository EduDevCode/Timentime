const hoursHand = document.querySelector('.hand.hours');
const minHand = document.querySelector('.hand.minutes');
const secHand = document.querySelector('.hand.seconds');

const setRotation = (element, rotationpercent) => {
    element.style.setProperty("--rotation", rotationpercent * 360);
}

const setClock = () => {
    const currentDate = new Date();

    const secspercent = currentDate.getSeconds() / 60;
    const minspercent = ((secspercent + currentDate.getMinutes()) / 60);
    const hourspercent = (minspercent + currentDate.getHours()) / 12;

    setRotation(secHand, secspercent)
    setRotation(minHand, minspercent)
    setRotation(hoursHand, hourspercent)
};

setClock();

setInterval(setClock, 1000);