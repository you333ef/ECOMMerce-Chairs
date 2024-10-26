





document.addEventListener('DOMContentLoaded',function(){
    fetch('../products.json')
    .then(function(pro) {
      return pro.json();
    })
    .then(function(DATA) {
      let rowLeatest = document.getElementById('rowLeatest');
      for (let i = 0; i < DATA.length; i++) {
        let COCO = `
          <div class="col-lg-4 col-md-6 col-sm-6 mt-5 itemssss  text-center" id="MONO">
            <div class="imgSECTION">
              <img src="${DATA[i].image}"class="text-center d-block HOHO" alt="">
              <img src="${DATA[i].saleImage}" id="SALE" alt="">
              <div class="ICNSLeatest">
                <i class="fa-solid fa-cart-plus" id="Cart_ICON"></i>
                <i class="fa-regular fa-heart" id="HAERT-ICON"></i>
              </div>
            </div>
            <div class="TEXT-SEC m-2">
              <h6 class="HOP">Comfort Handy Craft</h6>
              <div class="FFT">
                <h6 >$${DATA[i].price}</h6>
                <h6 id="AfterDescound">$${DATA[i].oldPrice}</h6>
              </div>
            </div>
          </div>
        `;
        rowLeatest.innerHTML += COCO;
        
      }
      let products=document.querySelectorAll('.itemssss')
      console.log(products)
    let All=document.getElementById('New')
    let Best=document.getElementById('Best')
    let Special=document.getElementById('Special')
    Best.onclick = function(e) {
        e.preventDefault();
        for (let i = 0; i < products.length; i++) {
            if (i < 3) {
                products[i].classList.remove('hidden'); // إظهار أول 3 عناصر
                products[i].classList.add('show');
            } else {
                products[i].classList.add('hidden'); // إخفاء الباقي
                products[i].classList.remove('show');
            }
        }
    }
    
    All.onclick = function(e) {
        e.preventDefault();
        for (let i = 0; i < products.length; i++) {
            products[i].classList.remove('hidden'); // إظهار كل العناصر
            products[i].classList.add('show');
        }
    }
    
    Special.onclick = function(e) {
        e.preventDefault();
        for (let i = 0; i < products.length; i++) {
            if (i >= 3) {
                products[i].classList.remove('hidden'); // إظهار العناصر اللي بعد 3
                products[i].classList.add('show');
            } else {
                products[i].classList.add('hidden'); // إخفاء أول 3
                products[i].classList.remove('show');
            }
        }
    }
    

   









    });
  
  
  
  
  




})
window.onload = function() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};
