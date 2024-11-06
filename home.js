// Wait for the DOM to fully load

document.addEventListener('DOMContentLoaded', function () {
     function YALLA(){
        let inner = document.getElementById('inner');
        inner.innerHTML = ARRAY.length; 
     }
     YALLA()
   
  // Fetch and display latest products from products.json
  fetch('./products.json')
      .then(function (pro) {
          return pro.json();
      })
      .then(function (DATA) {
          let rowLeatest = document.getElementById('rowLeatest');

          // Loop through products data and generate HTML content
          for (let i = 0; i < DATA.length; i++) {
              let COCO = `
                  <div class="col-lg-4 col-md-6 col-sm-6 mt-5 itemssss text-center" id="MONO">
                      <div class="imgSECTION">
                          <img src="${DATA[i].image}" class="text-center d-block HOHO" alt="">
                          <img src="./PART3/Group 27.svg" id="SALE" alt="">
                          <div class="ICNSLeatest">
                            <i class="fa-solid fa-cart-plus WIN" 
                            data-item='${JSON.stringify(DATA[i])}' 
                            onclick="FUN(this)" 
                            id="Cart_ICON"></i>


                              <i class="fa-regular fa-heart" id="HAERT-ICON"></i>
                                </div>
                                </div>
                                <div class="TEXT-SEC m-2">
                                <h6 class="HOP">${DATA[i].name}${i+1}</h6>
                                <div class="FFT">
                              <h6>$${DATA[i].price}</h6>
                              <h6 id="AfterDescound"></h6>
                          </div>
                      </div>
                  </div>
              `;
              rowLeatest.innerHTML += COCO;
          
          }
          // Product filters for Best, All, and Special categories
          let products = document.querySelectorAll('.itemssss');
          let All = document.getElementById('New');
          let Best = document.getElementById('Best');
          let Special = document.getElementById('Special');

          // Display first 3 products only when 'Best' is clicked
          Best.onclick = function (e) {
              e.preventDefault();
              for (let i = 0; i < products.length; i++) {
                  if (i < 3) {
                      products[i].classList.remove('hidden');
                      products[i].classList.add('show');
                  } else {
                      products[i].classList.add('hidden');
                      products[i].classList.remove('show');
                  }
              }
          };

          // Display all products when 'All' is clicked
          All.onclick = function (e) {
              e.preventDefault();
              for (let i = 0; i < products.length; i++) {
                  products[i].classList.remove('hidden');
                  products[i].classList.add('show');
              }
          };

          // Display products after the first 3 when 'Special' is clicked
          Special.onclick = function (e) {
              e.preventDefault();
              for (let i = 0; i < products.length; i++) {
                  if (i >= 3) {
                      products[i].classList.remove('hidden');
                      products[i].classList.add('show');
                  } else {
                      products[i].classList.add('hidden');
                      products[i].classList.remove('show');
                  }

              }
          };
         
      });
});
function YALLA(){
    let inner = document.getElementById('inner');
    inner.innerHTML = ARRAY.length; 
 }

function FUN(element) {
    const itemData = JSON.parse(element.getAttribute('data-item'));
   let OBJO={
    name:itemData.name,
    img:itemData.image,
    price:itemData.price
  
  
   }
   

   Swal.fire({
    title: ' The product will be added to the shopping cart🛒.',
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
        ARRAY.push(OBJO)
        YALLA()
        LOCALSTORAGE()
    }
});



 
  
 


  
  }
  window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1000, // المدة الزمنية بين كل انتقال (بالمللي ثانية)، يمكنك تغييرها حسب رغبتك
            disableOnInteraction: false, // يستمر في التقليب حتى إذا تم التفاعل معه
        },
        lazy: true,
        breakpoints: {
            576: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
        },
        on: {
            resize: function () {
                swiper.update(); // تحديث الـ Swiper عند تغيير حجم الشاشة
            }
        }
    });
};






















































































































let ARRAY=JSON.parse(localStorage.getItem('DATA'))||[]



// Fetch and display featured products from FATURED.json
fetch('./FATURED.json')
  .then(function (RES) {
      return RES.json();
  })
  .then(function (DATAFATURATE) {
      let FATPAPA = document.getElementById('papaFeatured');
      let HOHP = '';

      // Loop through featured products and generate HTML content
      for (let i = 0; i < DATAFATURATE.products.length; i++) {
          HOHP += `
              <div class="col-lg-3 col-md-6 col-sm-6" id="KOILO">
                  <div class="img-part">
                      <img src="${DATAFATURATE.products[i].image}" alt="">
                      <div class="ICON">
<i class="fa-solid fa-cart-plus FATURATED" onclick='ITI(${JSON.stringify(DATAFATURATE.products[i])})' id="Cart_ICON"></i>

                          <i class="fa-regular fa-heart" id="HAERT-ICON"></i>
                      </div>
                  </div>
                  <div class="details-part">
                      <h5>${DATAFATURATE.products[i].name}</h5>
                      <img src="./part2/colorsmix.svg" alt="">
                      <p>${DATAFATURATE.products[i].code}</p>
                      <small>${DATAFATURATE.products[i].price}</small>
                  </div>
              </div>
          `;
      
      }

      FATPAPA.innerHTML = HOHP;
  
     

  });
  function YALLA(){
    let inner = document.getElementById('inner');
    inner.innerHTML = ARRAY.length; 
 }


 function ITI(BIG){
let OBJ={
  name:BIG.name,
  img:BIG.image,
  code:BIG.code,
  price:BIG.price

}

Swal.fire({
    title: ' The product will be added to the shopping cart🛒.',
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
       
        ARRAY.push(OBJ)
        YALLA()
LOCALSTORAGE()
    }
});








 }
 function LOCALSTORAGE(){
  window.localStorage.setItem('DATA',JSON.stringify(ARRAY))
  console.log(ARRAY)
 }
 console.log(ARRAY)

 
 
 



































































































































































// Fetch and display accessories from ACSESS.json
fetch('./ACSESS.json')
  .then(function (restory) {
      return restory.json();
  })
  .then(function (CATEDATA) {
      let wrapper = document.getElementById('wrapper');
      let TOTo = '';

      // Loop through accessories data and generate HTML content
      for (let i = 0; i < CATEDATA.length; i++) {
          TOTo += `
              <div class="swiper-slide" > 
                  <div class="product-card text-center " > 
                      <div class="img-part position-relative"> 
                          <img src="${CATEDATA[i].image}" class="product-imageeee"  > 
                        
                      </div> 
                      <h5 class="mt-3">${CATEDATA[i].name}</h5> 
                      <p>$${CATEDATA[i].price}</p> 
<button class="btn" id="VIVO" onclick='PUSHHHEND(${JSON.stringify(CATEDATA[i]).replace(/'/g, "\\'")})'>View Shop</button>

                  </div> 
              </div>
          `;
      }

      wrapper.innerHTML = TOTo;
     
  });
  function YALLA(){
    let inner = document.getElementById('inner');
    inner.innerHTML = ARRAY.length; 
 }
  function PUSHHHEND(request){
   let JOJO={
    img:request.image,
    price:request.price,
    name:request.name,

   }



   Swal.fire({
    title: ' The product will be added to the shopping cart🛒.',
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
       
        ARRAY.push(JOJO)
        YALLA()
        LOCALSTORAGE()
    }
});




  

        
  }
  let CArtIcon=document.getElementById('CArtIcon')
 
  CArtIcon.onclick=function(){
    location.href='./CART.html'
  }
//  SWEET ALERT
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
        timer: 3000,  // الوقت بالمللي ثانية (3000 = 3 ثواني)
        showConfirmButton: false,  // يخفي زر التأكيد
        background: '#F2F0FF'
    });
}

