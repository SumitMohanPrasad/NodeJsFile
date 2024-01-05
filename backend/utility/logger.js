const {format}=require('date-fns')
const {v4:uuid}=require('uuid');
const fs = require('fs').promises;
const path=require('path');


const logEvents=async(message,filename,type="INFO")=>{
    const dateTime=`${format(new Date(),'yyyy-MM-dd\tHH:mm:ss')}`
    const id=uuid();
    const logData=`${dateTime}\t${id}\t${type}\t${message}\t${filename}\n`
    try{
        var isFileThere=await checkFileExists(path.join(__dirname,'logs'));
       console.log(isFileThere);
        if(!isFileThere){
          await fs.mkdir(path.join(__dirname,'logs'));
          await fs.writeFile(path.join(__dirname,'logs','dev_logs.txt'),"");
      }
      await fs.appendFile(path.join(__dirname,'logs','dev_logs.txt'),logData)
        console.log("I have logged successfully");
    }
    catch(err){
        console.log(err);
    }

}
// function checkFileExists(file) {
//     return fs.promises.access(file, fs.constants.F_OK)
//              .then(() => true)
//              .catch(() => false)
//   }
async function checkFileExists(file) {
    try {
      await fs.access(file, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }
  
module.exports={logEvents}
