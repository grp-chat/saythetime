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


const count = 60;
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const countdown = document.querySelector(".remaining");
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    remainingTime(count);
    sayTheTime();
});


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


function formatTime(date){
    
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const isAM = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${isAM ? "AM":"PM"}`
}

function formatDate(date) {
    const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()} `


}

// setTimeout(() => {
//     sayTheTime();
//     sayTheTime();
    
// }, 5000);

function remainingTime (count) {
    const interval = setInterval(() => {
        count--;
        countdown.textContent = "Speaking again in " + count + " sec";
        if (count == 0) {
            count = 60;
            clearInterval(interval);
        }
    },1000);
}


setInterval(() => {
    
    var count = 60
    remainingTime(count);
    
    sayTheTime();
    sayTheTime();
}, 60000);

setInterval(() => {
    console.log("running");
}, 5000);

setInterval(() => {
    const date = new Date;
    timeElement.textContent = formatTime(date);
    dateElement.textContent = formatDate(date);
}, 1000)
