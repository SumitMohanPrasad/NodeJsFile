// var palindrome=(x)=>{
//     for(let i=0;i<x.length;i++){
//         if(x[i]==x[])
//     }
// }
// var name=5;
// var n=name;
// name++;
// console.log(n+2)
// var x=10;
// var y=(x++,x+1)
// console.log(x,y)
// function add(){
//     var sum =0;
//     for(var i=0;i<arguments.length;i++){
//         sum+=arguments[i];

//     }
//     return sum;
// }
// console.log(add(1,43,7));

function outer(a,b,inner){
    num=inner(a,b);
    return num
}
function add(a,b){
    return a+b;
}
console.log(outer(4,5,add));