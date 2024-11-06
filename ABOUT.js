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
document.getElementById('HektoTYTLE').onclick=function(){
    window.location.href='./main.html'

}





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
function YALLA(){
  let ARRAY=JSON.parse(localStorage.getItem('DATA'))||[]
    let inner = document.getElementById('inner');
    inner.innerHTML = ARRAY.length; 
 } YALLA()
document.getElementById('CArtIcon').onclick=function(){
  window.location.href='./CART.html'}