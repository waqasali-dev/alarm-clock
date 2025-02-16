const addAlarmButton = document.getElementById('addAlarm');
const closeFormButton = document.getElementById('closeForm');
const alarmForm = document.getElementById('alarmForm');
const overlay = document.getElementById('overlay');
let alarmContainer = document.getElementById('alarmContainer');
const submitButton = document.getElementById('submit');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let meridian = document.getElementById('meridian');

let days = document.querySelectorAll(".day");

let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let sun = document.getElementById('sun');


let timer = document.getElementById('timer');

var noOfAlarms = 1;

addAlarmButton.addEventListener('click', () => {

    alarmForm.classList.add('active');
    overlay.classList.add('active');

});

closeFormButton.addEventListener('click' , ()=>{

    alarmForm.classList.remove('active');
    overlay.classList.remove('active');

});

overlay.addEventListener('click' , ()=>{

    alarmForm.classList.remove('active');
    overlay.classList.remove('active');

});

submitButton.addEventListener('click' , ()=>{
    dayVal = "";
    alarmForm.classList.remove('active');
    overlay.classList.remove('active');
    timer = hour.value + " : " + minute.value +" "+ meridian.value ;
    for(let i = 0; i<arrayDays.length ; i++){
        dayVal = dayVal + " " +arrayDays[i];
    }
    createAlarm(noOfAlarms , timer , dayVal);

});

function createAlarm(number , timer , remaining){

    const alarmDiv = document.createElement('div');
    alarmDiv.classList.add('alarm' , `${number}`);
    alarmContainer.appendChild(alarmDiv);

    const alarmTime = document.createElement('h3');
    alarmTime.classList.add('alarm-time');
    alarmTime.innerHTML = timer;
    alarmDiv.appendChild(alarmTime);

    const remainingTime = document.createElement('h3');
    remainingTime.classList.add('remaining-time');
    remainingTime.innerHTML = remaining;
    alarmDiv.appendChild(remainingTime);

    noOfAlarms++;
    dayval = "";
    arrayDays = [];
    days.forEach( day =>{
        day.classList.remove('dayActive');
    });

}

/////////////////////////////// Handling Days click /////////////////////
var arrayDays = [];
days.forEach(day =>{
    day.addEventListener("click" , ()=>{

        day.classList.toggle("dayActive");
        const dayVal = day.value;

        if(arrayDays.includes(dayVal)){

            arrayDays = arrayDays.filter(d => d != dayVal);

        } else {

            arrayDays.push(dayVal);

        }

    });
})

/////////////////////////////////////////////////////////////////////////
function updateTime(){
    let date = new Date();
    let hournow = date.getHours();
    let minuteNow = date.getMinutes();
    let secondNow = date.getSeconds();

    let timeClock = document.getElementById('timeClock');
    timeClock.innerHTML = hournow + " : " + minuteNow + " " + secondNow;
}

updateTime();

setInterval(updateTime, 1000);


