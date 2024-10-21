let Name=document.getElementById('Name')
let email=document.getElementById('email')
let password=document.getElementById('password')
let Confirm=document.getElementById('Confirm')
let SignN=document.getElementById('SignN')
let ARRAY = JSON.parse(localStorage.getItem('DATA')) || [];
if(ARRAY.length>0){
    window.location.href='./Fast.html'

}
SignN.onclick=function(){
let OBJ={
    Name:Name.value,
    email:email.value,
    password:password.value,
    Confirm:Confirm.value,
}
console.log(ARRAY)

if (OBJ.Name === '' || OBJ.email === '' || OBJ.password === '' || OBJ.Confirm === '') {
    alert('أحد الحقول اللي عندك فاضية يا عريس');
} else if (OBJ.password !== OBJ.Confirm) {
    alert('كلمة السر مش متطابقة مع التأكيد');
} else {
    ARRAY.push(OBJ);
    LOCAl();
    window.location.href = './main.html';
}

CLEAR()
}
function LOCAl(){
    window.localStorage.setItem('DATA',JSON.stringify(ARRAY))
}
LOCAl()
console.log(ARRAY)
function CLEAR(){
    Name.value=''
    email.value=""
    password.value=""
    Confirm.value=''

}





// للتأكيد مش أكتر 
// console.log(Name,email,password,Confirm,SignN)
