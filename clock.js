let date=document.querySelector(".dcon");
let clock=document.querySelector(".ccon");
const weekdays=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const monthnames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const dates = setInterval(function settingdatetime(){
    const today=new Date();
    let date1=today.getDate();
    let day= weekdays[today.getDay()];
    let month=monthnames[today.getMonth()];
    let year=today.getFullYear();
    let hours = today.getHours();
    
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
     if(minutes<10)
        {
            minutes="0"+minutes;
        }
        else{
            minutes=minutes;
    }
    date.innerHTML = `<p class="udate" > <span class="day">${day}</span ><span class="ud"><span>${date1}</span><span>${month}</span><span>${year}</span></span></p>`;
    if (hours>=12 )
    {
        
        clock.innerHTML = `<P class="utime">${hours}<span>:</span>${minutes}<span>:</span> <span>${seconds} </span> <pan>am</span></p>`;
    }
    else if (hours<=12)
    {
        clock.innerHTML = `<P class="utime">${hours}<span>:</span>${minutes}<span>:</span><span>${seconds} </span> <pan>pm</span></p>`;
 
        }
    

}, 1000)



let body = document.querySelector("#bod");
let maindiv = document.querySelector(".dcon");
let themel = document.querySelector(".para");
let tiembox = document.querySelector(".utime");
let datebox = document.querySelector(".udate");
let changer = document.querySelector(".btn");

flag = true;


changer.addEventListener("click", () => { 

    if(flag == true)
    {
        body.style.backgroundImage = "url(beautiful-wallpaper_279.jpg)";
        maindiv.style.backgroundColor = "#1F2B9B";
        themel.style.backgroundColor = "#71598B";
        changer.style.backgroundColor = "#D8EDDC";
        flag = false;
    }
    else if(flag == false){
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "lighseagreen";
        maindiv.style.backgroundColor = "lightseagreen";
        themel.style.backgroundColor = "aqua";
        changer.style.backgroundColor = "#D3D3D3";


        flag = true;
    }

    
})