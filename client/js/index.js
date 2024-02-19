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

// if ('wakeLock' in navigator) {alert("yes")}

// async function acquireLock() {
//     await navigator.wakeLock.request("screen");
// }

// alert("test");

const timeNowHours = new Date().getHours();
const timeNowMinutes = new Date().getMinutes();
const timeNowInHHMM = [timeNowHours,timeNowMinutes].join(':');

function convertToAMPM(time) {
    const [h, m] = time.split(':').map(n => parseInt(n));
    const hour = HOURS[h % 12];
    const suffix = (h < 12) ? 'AM' : 'PM';
    return [hour, suffix];
}

const timeNowHoursInAMPM = convertToAMPM(timeNowInHHMM);

// console.log(talk(timeNowInHHMM));

const speech = new SpeechSynthesisUtterance(
    `Hello, the time now is ${timeNowHoursInAMPM[0]} ${timeNowMinutes} ${timeNowHoursInAMPM[1]}`
);

setInterval(() => {
    speechSynthesis.speak(speech);
}, 60000);

setInterval(() => {
    console.log("running");
}, 5000);
