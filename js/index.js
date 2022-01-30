const form = document.querySelector('form');
const toastr = document.querySelector('#toastr');

form.addEventListener('submit', event => {
    event.preventDefault();

    sucessSubmit();
});


function sucessSubmit() {
    toastr.style.display="block";
    
    let timeoutId = setTimeout(() => {
        toastr.style.display="none";
}, 4000);

    form.reset();
};