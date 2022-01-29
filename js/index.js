function formValidate() {
    
    let x = document.getElementById("formvalidate").value;
    
    if (x == "") {
        alert("Não foi possível enviar o orçamento, verifique se os campos digitados estão corretos!");
    } else {
        alert("Orçamento Enviado!");
    }
}