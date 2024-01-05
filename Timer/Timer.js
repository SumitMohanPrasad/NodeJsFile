const stopElement = document.getElementById('stop');
const count=new Date("Jan 5, 2024 15:37:25").getTime();
var x;
var countDownTimer=()=>{
    x=setInterval(function(){
  
    var now=new Date().getTime();
    var dist=count-now;
    var days=Math.floor(dist/(1000*60*60*24));
    var hours=Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((dist%(1000*60*60))/(1000*60));
    var sec=Math.floor((dist%(1000*60))/1000);
    
    if(dist<0  ){
        clearInterval(x);
        document.getElementById('countDown').innerHTML='Expired';
    }else{
    document.getElementById('countDown').innerHTML=
    `<span>${days} d ${hours} h ${minutes} m ${sec} s</span>`;
    }
},1000)
}

 var stop =()=>{
  clearInterval(x);
}