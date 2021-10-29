let menu = document.getElementById('menu');
let menuLateral = document.querySelector('.menu-lateral');
menu.addEventListener('click', function(){
    menuLateral.classList.toggle('activated'); 
})

console.log(menu);
console.log(menuLateral);