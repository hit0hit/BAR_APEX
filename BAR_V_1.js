// adiciona a class completed na proxima div
let item = apex.item("P2_ITEM3").getValue();
    let elementos = document.querySelectorAll('.vd-item');
    let primeirosDoisElementos = Array.from(elementos).slice(0, item);
    if (primeirosDoisElementos.length > 0) {
        primeirosDoisElementos.forEach(function(elemento) {
            if  (elemento.classList.contains('completed')) {
                elemento.classList.remove('completed');
                console.log('Classe adicionada com sucesso!');
            }
        });
    }

// adiciona a class completed na volta div
function removerClasse(totalElementos) {
    var elementos = document.querySelectorAll('.vd-item');
    if (elementos.length > 0) {
        for (var i = elementos.length - 1; i >= 0; i--) {
            var elemento = elementos[i];
            if  (elemento.classList.contains('completed')) {
                elemento.classList.remove('completed');
                console.log('Classe removida com sucesso!');
            }
            if (elementos.length - i >= totalElementos) {
                break;
            }
        }
    }
}
let item = apex.item("P2_ITEM3").getValue();
removerClasse(item); 
