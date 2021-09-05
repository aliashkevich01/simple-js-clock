const hourHand=document.querySelector('.hour-hand');
const minuteHand=document.querySelector('.minute-hand');
const secondHand=document.querySelector('.second-hand');
let buttonTheme=document.querySelector('.button-theme');
let page = document.querySelector('.page');

function setDate(){
    const currentDate=new Date();
    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
    let month=currentDate.getMonth()+1;
    let date=currentDate.getDate();
    let year=currentDate.getFullYear();
    year=year.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    month=month.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    date=date.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    hours=hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  
    minutes=minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    seconds=seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const hoursDeg=(hours/12)*360+90;
    const minutesDeg=(minutes/60)*360+90;
    const secondsDeg=(seconds/60)*360+90;
    hourHand.style.transform=`rotate(${hoursDeg}deg)`;
    minuteHand.style.transform=`rotate(${minutesDeg}deg)`;
    secondHand.style.transform=`rotate(${secondsDeg}deg)`;
    document.getElementById('info-date').innerHTML='Current date: ' + date + ' —  ' + month + ' —  ' + year;
    document.getElementById('info-time').innerHTML='Current time: ' + hours + ' —  ' + minutes + ' —  ' + seconds;

}
setInterval(setDate, 1000);

buttonTheme.onclick=function(){
    page.classList.toggle('cold-theme');
    page.classList.toggle('dragon-theme');
}