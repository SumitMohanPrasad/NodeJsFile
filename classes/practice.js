const color=['red','blue','green','yellow']
let i=-1;
let cnt=0;
document.getElementsByTagName("button")[0].addEventListener('click',
()=>{
    i=(i+1)%4
    cnt++
    if(i>4){
        i%4;
    }
    document.getElementsByTagName("body")[0].style.backgroundColor=color[i]
    document.getElementsByTagName("div")[0].innerHTML=`<p>count ${cnt}<p>`
}
)