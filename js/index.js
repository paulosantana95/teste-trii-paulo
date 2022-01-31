const form = document.querySelector('form');

//Retirado comportamento padrão do form

form.addEventListener('submit', event => {
    event.preventDefault();
    
    sucessSubmit();

});


//manipulação do toastr indicando submit sucess e reset do formulário.

function sucessSubmit() {
    const toastr = document.querySelector('#toastr');
    
    toastr.className="show";
    
    setTimeout(function(){
        toastr.className = toastr.className.replace("show", ""); 
}, 3000);

    form.reset();

};


