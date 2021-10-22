window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    let errores = [];
    let name = document.getElementById('name');
    if(name.value==='' || name.value.length<=2){
        errores.push('NameIncorrect');
        name.addEventListener('focus'function()){
            
        }
    }
    if(errores.length>0){
        formulario.addEventListener('submit', function(e){
            e.preventDefault();
        })
    }

})