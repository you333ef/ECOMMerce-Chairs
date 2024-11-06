function TOTALALL(){
    
    let  inptTotals=document.querySelectorAll('.TOTALLR')
    let oppo=0
   for(let i=0;i<inptTotals.length;i++){
 
    let result=parseInt(inptTotals[i].innerHTML)||0
    oppo+=result
   }

   console.log(oppo)
   document.getElementById('total').innerHTML='$'+oppo
   let ppo=oppo+50
   document.getElementById('totalsub').innerHTML= '$'+ppo
  

  
}

 
window.onload = function() {
    let ARRAY = JSON.parse(localStorage.getItem('DATA')) || [];
    function YALLA(){
        let inner = document.getElementById('inner');
        inner.innerHTML = ARRAY.length; 
     }
     YALLA()
    if (ARRAY.length === 0) {
        document.getElementById('NONA').style.display = 'none';
        document.getElementById('SOSTA').innerHTML += `
            <section class="error-section text-center d-flex flex-column justify-content-center align-items-center vh-50">
                <div class="container"style="display: flex; flex-direction: column;" >
                    <img src="./Trending/Group 123.svg" alt="Error Image" class="img-fluid mb-2 EMPTY" >
                    <a href="./main.html" class="btn Back">Back To Home</a>
                </div>
            </section>
        `;
    } 
    // إظهار NONA عند وجود عناصر في ARRAY
    else if (ARRAY.length > 0) {
      
        document.getElementById('SOSTA').style.display = 'none';
        document.getElementById('NONA').style.display = 'block';
    }
    console.log(ARRAY); // طباعة البيانات في الكونسول

    let CARTHTML = document.getElementById('JOOCART');
    let TET = '';

    for (let i = 0; i < ARRAY.length; i++) {
        TET += ` <table class="table cart-table" >
       
        <tbody>
            <tr class=" align-items-center">
                <td class="d-flex align-items-center">
                    <img src="${ARRAY[i].img}" alt="OOP" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px;">
                    <img src="./PART3/Group 43.svg" alt="OO" onclick='DEL(${i})' id='delete'>
                    <div>
                        <p class="mb-1"><strong id="NAME">${ARRAY[i].name}</strong></p>
                        <div class="VOO">
                         
                        <small>Color: Brown</small>
                        <small>Size: XL</small>

                        </div>

                      
                    </div>
                </td>
                <td id="ASAHPEE" class="text-center align-middle">$${ARRAY[i].price}</td>
                <td class="text-center align-middle">
                   <div class="quantity-control  align-middle ">
    <button class="decrease" id="decrease align-middle" onclick="DECREMENT(${i},${ARRAY[i].price})">-</button>
    <button type="number" value="1"  id='SPaceinpt-${i}' class="quantity-input align-middle">1</button>
    <button class="increase align-middle" id="increase" onclick="INCREMENT(${i},${ARRAY[i].price})">+</button>
</div>

                </td >
                <td class="text-center align-middle TOTALLR"id="ASAHPEEE-${i}">${ARRAY[i].price}</td>
            </tr>
        </tbody>
    </table>

    

    <div class="col-lg-4 mt-4">
       
       
    </div>

        `;
        
    }

    CARTHTML.innerHTML = TET
  
    TOTALALL()
   
  
}

TOTALALL()
function INCREMENT(ok,price) {
    let space = parseInt(document.getElementById(`SPaceinpt-${ok}`).innerHTML);
    console.log(space)
   
    space += 1;
    document.getElementById(`SPaceinpt-${ok}`).innerHTML = space;
  
 if(space>1){
    let OPP=parseInt(document.getElementById(`SPaceinpt-${ok}`).innerHTML)
    let PRICE=parseInt(`${price}`)
   let Result=OPP*PRICE
   console.log(Result)
   document.getElementById(`ASAHPEEE-${ok}`).innerHTML=Result
 

 }
 TOTALALL();



}

function DECREMENT(DIs, price) {

    let Space = parseInt(document.getElementById(`SPaceinpt-${DIs}`).innerHTML);

    if (Space >= 1) {
        Space -= 1;
        document.getElementById(`SPaceinpt-${DIs}`).innerHTML = Space;
    }

    if (Space >= 1) {
        let PRICE = parseInt(`${price}`);
        let Result = Space * PRICE;
        console.log(Result);
        document.getElementById(`ASAHPEEE-${DIs}`).innerHTML = Result;
    }
    TOTALALL();

   
}





let HektoTYTLE=document.getElementById('HektoTYTLE')
  HektoTYTLE.onclick=function(){
   location.href='./main.html'
  }
  let deletee=document.getElementById('delete')

  function DEL(RET){
    let ARRAY = JSON.parse(localStorage.getItem('DATA')) || [];
  ARRAY.splice(RET,1)
  localStorage.setItem('DATA', JSON.stringify(ARRAY));
  window.location.reload()
  }
  
function DELETEALL(){
    let ARRAY = JSON.parse(localStorage.getItem('DATA')) || [];
    ARRAY=[]
    localStorage.setItem('DATA', JSON.stringify(ARRAY));
    window.location.reload()
  

}


document.getElementById('Checkout').addEventListener('click', function () {
    Swal.fire({
        title: 'Do you want to confirm the purchase?',
        text: 'Are you sure?' ,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '7E33E0',
        cancelButtonColor: '#FB2E86',
        background: '#F2F0FF'
    }).then((result) => {
        if (result.isConfirmed) {
           
            window.location.href = './SUCCESS.html'; 
        }
    });
});
document.getElementById('Logout').addEventListener('click', function () {
    Swal.fire({
        title: 'Do you really want to log out?',
        text: 'Are you sure?' ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '7E33E0',
        cancelButtonColor: '#FB2E86',
        background: '#F2F0FF'
    }).then((result) => {
        if (result.isConfirmed) {
           
            window.location.href = './Fast.html'; 
        }
    });
});

document.getElementById('Soon').onclick = function() {
    Swal.fire({
        title: '🚧 We are currently working on this section!',
        text: 'Stay tuned, it will be available soon.',
        icon: 'info',
        timer: 3000, 
        showConfirmButton: false, 
        background: '#F2F0FF'
    });
}

