let show = document.querySelector('.show');
let show2 = document.querySelector('.show2');
let hide = document.querySelector('.hide');
let hide2 = document.querySelector('.hide2');
let passwordInput1 = document.querySelector('.passwordInput1');
let passwordInput2 = document.querySelector('.passwordInput2');

hide.addEventListener('click', function(){
    if(passwordInput1.type == "password"){
        passwordInput1.type = "text";
    }else{
        passwordInput1.type = "password";
    }
    hide.style.display = "none";
    show.style.display = "block";
})

show.addEventListener('click', function(){
    if(passwordInput1.type == "text"){
        passwordInput1.type = "password";
    }else{
        passwordInput1.type = "text";
    }
    hide.style.display = "block";
    show.style.display = "none";
})

hide2.addEventListener('click', function(){
    if(passwordInput2.type == "password"){
        passwordInput2.type = "text";
    }else{
        passwordInput2.type = "password";
    }
    hide2.style.display = "none";
    show2.style.display = "block";
})

show2.addEventListener('click', function(){
    if(passwordInput2.type == "text"){
        passwordInput2.type = "password";
    }else{
        passwordInput2.type = "text";
    }
    hide2.style.display = "block";
    show2.style.display = "none";
})