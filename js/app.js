function comando(x) {

    var numero = document.getElementById('numero');
    var value = numero.value;


    if (x == 'menos') {
        numero.value = --value;
    } else {
        numero.value = ++value;
    }
    alterarLink();
}


var inputs = document.querySelectorAll('input');
inputs.forEach(element => {
    element.addEventListener('input', function() {
        alterarLink();
    })
});

function alterarLink() {
    var pais = document.getElementById('pais').value;
    var ddd = document.getElementById('ddd').value;
    var numero = document.getElementById('numero').value;

    if (pais == undefined) {
        pais = 0;
    }

    if (ddd == undefined) {
        ddd = 0;
    }

    if (numero == undefined) {
        numero = 0;
    }

    document.querySelector('#link').href = `https://wa.me/${pais}${ddd}${numero}`;
    document.getElementById('show_numero').innerHTML = `${pais}${ddd}${numero}`;
}

alterarLink();