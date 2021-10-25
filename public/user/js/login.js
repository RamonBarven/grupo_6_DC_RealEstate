
    let formulario = document.querySelector('form');
    let errores = [];
    let email = document.querySelector('input#email');
    let password = document.querySelector('input#password');
    let label = document.querySelectorAll('label.labelerros');
    let original = label.innerHTML;

    email.addEventListener('change', function(){
        let verification = this.value.includes('@');
        let verification2 = this.value.includes('.');
        if(this.value.length<1){
            label[0].classList.add('incorrect');
            errores.push('NameIncorrect');
        }

        if(verification == false || verification2 == false ) {
            label[0].classList.add('incorrect');
            errores.push('NameIncorrect');
            
        } else {
            label[0].classList.remove('incorrect');
            console.log(errores.length);
            errores = errores.filter(function(cosas){
                return cosas != 'NameIncorrect';
            });
        }

            formulario.addEventListener('submit', function(e){
                if(errores.length>0){
                    e.preventDefault();
                }
                
            })
    });

    password.addEventListener('change', function(){
        
        if(this.value.length<1) {
            label[1].classList.add('incorrect');
            errores.push('NameIncorrect');
            
        } else {
            label[1].classList.remove('incorrect');
            errores = errores.filter(function(cosas){
                return cosas != 'NameIncorrect';
            });
        }
        
            formulario.addEventListener('submit', function(e){
                if(errores.length>0){
                    e.preventDefault();
                }
                
            })
    });

    window.addEventListener('load', function(){
        label[0].classList.add('incorrect');
        label[1].classList.add('incorrect');
    })


    
