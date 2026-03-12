function updateCLock(){
let now = new Date()
let hours = now.getHours()
// let hours = 0;
let minutes = now.getMinutes()
let seconds = now.getSeconds()


let ampm = hours>= 12 ? "PM" : "AM";

hours = hours % 12;

hours = hours ? hours : 12;


if(hours < 10)hours = "0" + hours;
if(minutes < 10)minutes = "0" + minutes;
if(seconds < 10)seconds = "0" + seconds;

document.getElementById('min').value = minutes;
document.getElementById('hour').value = hours;
document.getElementById('sec').value = seconds;
document.getElementById('am-pm').textContent = ampm;


document.getElementById("london").textContent =
now.toLocaleTimeString("en-US",{timeZone:"Europe/London"});

document.getElementById('tokyo').textContent = 
now.toLocaleTimeString("en-JP", {timeZone:"Asia/Tokyo"})
document.getElementById("newyork").textContent =
now.toLocaleTimeString("en-US",{timeZone:"America/New_York"});

document.getElementById("dubai").textContent = 
now.toLocaleTimeString('en-AE',{timeZone:"Asia/Dubai"});
}
updateCLock()
setInterval(updateCLock,1000)

let btn = document.getElementById('theme-toggle');

let icon = document.getElementById('theme-icon');

btn.addEventListener('click',function(){
    if(document.body.classList.toggle("dark-mode")){
        icon.src = "https://www.svgrepo.com/show/398422/sun-with-face.svg"
         
        
    }else{
     icon.src = "https://www.svgrepo.com/show/354092/moon.svg"  
    }
})

let now = new Date();
let fullDate = now.toLocaleDateString('en-US',{
    day: 'numeric',
    weekday:'long',
    month: 'long',
    year: 'numeric'
})
document.getElementById('DT').textContent = fullDate
