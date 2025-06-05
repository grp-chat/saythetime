const sock = io();

const HOURS = [
    "twelve",
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine", 
    "ten", 
    "eleven"
];


function convertToAMPM(time) {
    const [h, m] = time.split(':').map(n => parseInt(n));
    const hour = HOURS[h % 12];
    const suffix = (h < 12) ? 'ayy,m' : 'P.M';
    const hourInNum = (h < 12) ? h : h - 12;
    return [hour, suffix, hourInNum];
}

function getTheTime() {
    const timeNowHours = new Date().getHours();
    const timeNowMinutes = new Date().getMinutes();
    const timeNowSeconds = new Date().getSeconds();

    return [timeNowHours, timeNowMinutes, timeNowSeconds];

}

function sayTheTime() {

    const [timeNowHours, timeNowMinutes] = getTheTime();
    
    const timeNowInHHMM = [timeNowHours,timeNowMinutes].join(':');
    const timeNowHoursInAMPM = convertToAMPM(timeNowInHHMM);

    const speech = new SpeechSynthesisUtterance(
        `Hello, the time now is: ${timeNowHoursInAMPM[0]} ${timeNowMinutes}, ${timeNowHoursInAMPM[1]}`
    );

    speechSynthesis.speak(speech);
}

function displayTime() {
    const [timeNowHours, timeNowMinutes, timeNowSeconds] = getTheTime();
    const timeNowInHHMM = [timeNowHours,timeNowMinutes].join(':');
    const timeNowHoursInAMPM = convertToAMPM(timeNowInHHMM);

    document.getElementById('hours').innerHTML = timeNowHoursInAMPM[2];
    document.getElementById('minutes').innerHTML = timeNowMinutes;
    document.getElementById('seconds').innerHTML = timeNowSeconds;
    document.getElementById('session').innerHTML = timeNowHoursInAMPM[1];
}

setTimeout(() => {
    sayTheTime();
    sayTheTime();
    
}, 5000);


setInterval(() => {
    sayTheTime();
    sayTheTime();
}, 60000);

setInterval(() => {
    console.log("running");
}, 5000);

setInterval(displayTime, 1000);
