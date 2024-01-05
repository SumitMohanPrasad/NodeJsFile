const express=require('express');

const app=express();
app.use(express.json());

function countVowels(word){
    let count=0;
   for(let i=0;i<word.length;i++){
       if(word[i]=='a'|| word[i]=='A' || word[i]=='e'|| word[i]=='E' || word[i]=='i'||word[i]=='I' || word[i]=='o'||word[i]=='O'|| word[i]=='u'|| word[i]=='U'){
           count++;
       }
   }
   console.log(count)

}
countVowels("Hello");

app.get('/countvowels',(req,res)=>{
     let string=req.body.abc;
     let vowels=countVowels(string);
     res.send({"vow":vowels})
})
//port+ip address =>socket
const port=3001;
const ip="localhost";
app.listen(port,ip,()=>{
    console.log("statrted listening")
})