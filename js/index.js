const form = document.querySelector('form');


form.addEventListener('submit', event => {
    event.preventDefault();

    sucessSubmit();

});


function sucessSubmit() {
    const toastr = document.querySelector('#toastr');

    toastr.className="show";
    
    setTimeout(function(){
        toastr.className = toastr.className.replace("show", ""); 
}, 3000);

    form.reset();

}
// setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
// }


