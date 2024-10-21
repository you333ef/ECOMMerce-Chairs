let EAmilPASSL=document.getElementById('EAmilPASSL')
let PASSFAST=document.getElementById('PASSFAST')
let SIGNFAST=document.getElementById('SIGNFAST')
let ARRAY = JSON.parse(localStorage.getItem('DATA')) || [];
SIGNFAST.onclick=function(){
    if(EAmilPASSL.value==''||PASSFAST.value=='' ){
        alert("Double-check all fields are filled in ❌ ")
    
       }else{

        let found=false
        for(let i=0;i<ARRAY.length;i++){
         
        if(EAmilPASSL.value === ARRAY[i].email && PASSFAST.value === ARRAY[i].password){
            found=true
            break;
           
        
        }
        }
        
        if(found){
            window.location.href='./main.html'
        }else{
           alert('Email or password incorrect❌ Please try again.')
        }

       }
   


       CLEAR()

}
function CLEAR(){
    EAmilPASSL.value=''
    PASSFAST.value=''

}
console.log(ARRAY)