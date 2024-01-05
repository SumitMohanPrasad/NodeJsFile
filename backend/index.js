const {logEvents}=require('./utility/logger.js')
const http = require('http')
const express=require('express')
const app = express();
const cors=require('cors')
app.use(express.json());
app.use(cors());
const userRoute=require('./Routes/userRoutes.js');
// var myPrintMiddleware=(req,res,next)=>{
//     logEvents()
// }
// app.use(myPrintMiddleware);

app.use('/user',userRoute);

var m1=(req,res,next)=>{
    console.log("1st middleware");
    next();
}
var m2=(req,res,next)=>{
    console.log("2nd middleware");
    next();
}
var m3=(req,res,next)=>{
    console.log("3rd middleware");
    next();
}

app.get('/address/*',m1,m2,m3,(req,res,nexts)=>{
    //console.log(req.params);
    console.log("comig from plce where i send the res back to client")
    // throw new Error
    res.send("Hello world")
    nexts()
 },(req,res)=>{
    //console.log(req.query.page);
    res.send("Hello world");
})

app.use((err,req,res,next)=>{
    console.log("ooh i agot the error");
    logEvents(err.message,__filename,"Error")
    res.send("Something  went wrong");
})



//logEvents('I created a log',__filename)
app.get('/address/:houseNo.:blockNo',(req,res)=>{
    console.log(req.params);
    res.send("Hello world")
 })
//https:base_url.com/address/?page=3&para=4
 app.get('/address/*',(req,res)=>{
     console.log(req.query.page);
     res.send("hello world");
 })
const server =http.createServer((req,res)=>{
    // console.log("created a server")
    // console.log(tyoeof(req));
    // res.write('Hello World');
    console.log(req.url)
    switch(req.url){
        case '/':
            res.write("hello world ar slash");
            break;
        case '/hello':
            res.write("hello world at hello")
            break;
        default:
            res.write("404 not found")
    }
    res.end();
});
// server.listen("3000",()=>{
//     console.log("Listening to this port :3000")
// })
app.listen("3000",()=>{
    console.log("Listening to this port :3000")
})
