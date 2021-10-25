let formulario = document.querySelector('form');
let errores = [];
let loc = document.querySelector('input#location');
let description = document.querySelector('textarea#description');
let lista = document.querySelector('ul');

loc.addEventListener('change', function(){
        
    if(this.value.length<5) {
        errores.push('Location requires at least 5 characters');
        errores.forEach(function(mistake){
            lista.innerHTML="<li class='labelerros'>"+mistake+"</li>"
        })
    } else {
        errores = errores.filter(function(cosas){
            return cosas != 'Location requires at least 5 characters';
        });
        lista.innerHTML="";
    }
    
    formulario.addEventListener('submit', function(e){
        if(errores.length>0){
            e.preventDefault();
        }
            
    })
    
});

description.addEventListener('change', function(){
    if(this.value.length<20) {
        errores.push('Description requires at least 20 characteres');
        errores.forEach(function(mistake){
            lista.innerHTML="<li class='labelerros'>"+mistake+"</li>"
        })
    } else {
        errores = errores.filter(function(cosas){
            return cosas != 'Description requires at least 20 characteres';
        });
        lista.innerHTML="";
    }
    
    formulario.addEventListener('submit', function(e){
        if(errores.length>0){
            e.preventDefault();
        }
            
    })
});