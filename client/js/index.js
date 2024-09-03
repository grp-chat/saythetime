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

// acquireLock();

// alert("test");


// const requestWakeLock = async () => {
//     let wakeLock = null;
//     try {
//         wakeLock = await navigator.wakeLock.request('screen');
//         wakeLock.addEventListener('release', () => {
//             console.log('Wake Lock was released');
//         });
//         console.log('Wake Lock is active');
//     } catch (err) {
//         console.error(`${err.name}, ${err.message}`);
//     }
// };

//requestWakeLock();



function convertToAMPM(time) {
    const [h, m] = time.split(':').map(n => parseInt(n));
    const hour = HOURS[h % 12];
    const suffix = (h < 12) ? 'ayy,m' : 'P...M';
    return [hour, suffix];
}

// console.log(talk(timeNowInHHMM));

function sayTheTime () {
    const timeNowHours = new Date().getHours();
    const timeNowMinutes = new Date().getMinutes();
    const timeNowInHHMM = [timeNowHours,timeNowMinutes].join(':');
    const timeNowHoursInAMPM = convertToAMPM(timeNowInHHMM);

    const speech = new SpeechSynthesisUtterance(
        `Hello, the time now is: ${timeNowHoursInAMPM[0]} ${timeNowMinutes}, ${timeNowHoursInAMPM[1]}`
    );

    speechSynthesis.speak(speech);
}

setTimeout(() => {
    sayTheTime();
    sayTheTime();
    
}, 5000);


setInterval(() => {
    sayTheTime();
    sayTheTime();
    // requestWakeLock();
}, 60000);

setInterval(() => {
    // sayTheTime();
    console.log("running");
}, 5000);
