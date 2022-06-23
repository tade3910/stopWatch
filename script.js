const startButton = document.querySelector("#Start");
const stopButton = document.querySelector("#Stop");
const resettButton = document.querySelector("#Reset");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const hours = document.querySelector("#hours");

startButton.addEventListener("click",() =>{
    Interval = setInterval ( watchLogic,10)
});
stopButton.addEventListener("click",() =>{
    clearInterval(Interval);
})
resettButton.addEventListener("click",()=>{
    clearInterval(Interval);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    hours.classList.add("invisible");
    document.querySelector("#target").classList.add("invisible");

})

function watchLogic(){
    let secondsText = seconds.textContent;
    let minutesText = minutes.textContent;
    let hoursText = hours.textContent;

    secondsText = Number(secondsText);
    minutesText = Number(minutesText);
    hoursText = Number(hoursText);

    let padding = "0";
    secondsText++;
    if(secondsText > 59){
        secondsText = 0;
        minutesText++;
    }

    if(minutesText > 59){
        hoursText++;
        hours.classList.remove("invisible");
        document.querySelector("#target").classList.remove("invisible");
        minutesText = 0;
    }

    secondsText = secondsText.toString();
    minutesText = minutesText.toString();
    hoursText = hoursText.toString();

    if(secondsText.length == 1){
        secondsText = padding + secondsText;
    }
    if(minutesText.length == 1){
        minutesText = padding + minutesText;
    }
    if(hoursText.length == 1){
        hoursText = padding + hoursText;
    }
    seconds.textContent = secondsText;
    minutes.textContent = minutesText;
    hours.textContent = hoursText;
    
}
