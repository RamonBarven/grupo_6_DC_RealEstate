
    let formulario = document.querySelector('form');
    let errores = [];
    let nameUser = document.querySelector('input#name');
    let lastname = document.querySelector('input#lastname');
    let email = document.querySelector('input#email');
    let password = document.querySelector('input#password');
    let imagen = document.getElementById('imageU');
    let camera = document.querySelector('#camera');
    let upload = document.querySelector('.upload');
    let label = document.querySelectorAll('label.labelerros');
    let original = label.innerHTML;
    nameUser.addEventListener('change', function(){
        
        if(this.value.length<2) {
            label[0].classList.add('incorrect');
            label[0].classList.remove('correct')
            errores.push('NameIncorrect');
            
        } else {
            label[0].classList.remove('incorrect');
            label[0].classList.add('correct');
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

    lastname.addEventListener('change', function(){
        if(this.value.length<2) {
            label[1].classList.add('incorrect');
            label[1].classList.remove('correct')
            errores.push('NameIncorrect');
            
        } else {
            label[1].classList.remove('incorrect');
            label[1].classList.add('correct');
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

    email.addEventListener('change', function(){
        let verification = this.value.includes('@');
        let verification2 = this.value.includes('.');
        if(this.value.length<2){
            label[2].classList.add('incorrect2');
            label[2].classList.remove('correct');
            errores.push('NameIncorrect');
        }

        if(verification == false || verification2 == false ) {
            label[2].classList.add('incorrect2');
            label[2].classList.remove('correct')
            errores.push('NameIncorrect');
            
        } else {
            label[2].classList.remove('incorrect2');
            label[2].classList.add('correct');
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
        
        if(this.value.length<8) {
            label[3].classList.add('incorrect3');
            label[3].classList.remove('correct')
            errores.push('NameIncorrect');
            
        } else {
            label[3].classList.remove('incorrect3');
            label[3].classList.add('correct');
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

    imagen.addEventListener('change', function(e){
        camera.style.color = 'green';
        upload.innerText='Uploaded✔️';
    });

    
