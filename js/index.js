const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    sucessSubmit();
});


function sucessSubmit() {
    if (form) {
        alert("Enviado com Sucesso!");
    } 
}


// var select = document.getElementById('language');
// 	var value = select.options[select.selectedIndex].value;
// 	console.log(value); // pt