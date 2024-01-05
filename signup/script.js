const fullNameElement = document.getElementById('fullName');
const emailElement = document.getElementById('email');
const phoneNumberElement = document.getElementById('phoneNumber');
const passwordElement = document.getElementById('password');
console.log(fullNameElement.value, "in starting full name is empty");

//Login 
const emailLogin=document.getElementById('emailLogin');
const passwordLogin= document.getElementById('passwordLogin')



function signup(){
    console.log(fullNameElement.value, emailElement.value, phoneNumberElement.value, passwordElement.value, "on clicking button");

const data={
    fullName:fullNameElement.value,
    email:emailElement.value,
    phoneNumber:phoneNumberElement.value,
    password:passwordElement.value
}

axios.post('http://localhost:3001/signup',data).then((result)=>{
    console.log(result);
    alert(result.data.message);
    document.getElementById('fullName').value='';
    document.getElementById('email').value='';
    document.getElementById('phoneNumber').value='';
    document.getElementById('password').value='';

}).catch((err)=>{
   console.log(err);  
})
}

function login(){
    console.log(emailLogin.value , passwordLogin.value)
    const data={
        email: emailLogin.value,
        password: passwordLogin.value
    }
    axios.post('http://localhost:3001/login',data).then((result)=>{
        console.log(result);
        alert(result.data.message);
    }).catch((err)=>{
        console.log(err);
    })
}


