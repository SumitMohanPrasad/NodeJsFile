let mongoose=require('mongoose');
const server="localhost:27017";
const db="Mydb";

class Database{
    constructor(){

    }
    _connect(){
        mongoose.connect(`mongodb://${server}/${db}`)
        .then(()=>{
            console.log("Connectd to db");

        })
    }
}