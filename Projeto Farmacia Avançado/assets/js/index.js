let medicamentos = [];

function adicionarMedicamento () {
    event.preventDefault();

    let nomeMed = document.getElementById("nameInput").value;
    let qtdMed = document.getElementById("numberInput").value;
    let precoMed = document.getElementById("priceInput").value;
    let classeMed = document.getElementById("medInput").value;

    if (!nomeMed || !qtdMed || !precoMed || !classeMed) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let medicamento = {
        "nomeMed": nomeMed,
        "qtdMed": qtdMed,
        "precoMed": precoMed,
        "classeMed": classeMed
    }

    formNullo()
    medicamentos.push(medicamento);
    mostrarLista();
}

function excluirMed(index){
    medicamentos.splice(index,1);
    mostrarLista();
}

function formNullo() {
    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("priceInput").value = "";
    document.getElementById("medInput").value = "";
}

function  mostrarLista() {
    let listaMeds = document.getElementById("tableMed");
    listaMeds.innerHTML = `
    <tr>
    <th>ID</th>
    <th>MEDICAMENTO</th>
    <th>QUANTIDADE</th>
    <th>PREÇO POR UNIDADE</th>
    <th>CLASSE DO MEDICAMENTO</th>
    <th>REMOVER</th>
    </tr>
    `;

    console.log(medicamentos.length)

    for(let i = 0; i < medicamentos.length; i++) {
        listaMeds.innerHTML = listaMeds.innerHTML + `
        <div id="listaDentro">
        <tr>
        <td>${i}</td>
        <td>${medicamentos[i].nomeMed}</td>
        <td>${medicamentos[i].qtdMed}</td>
        <td>${medicamentos[i].precoMed}</td>
        <td>${medicamentos[i].classeMed}</td>
        <td><img src="./assets/img/lixeira.png" width= "20px" height="20px" onclick="excluirMed(${i})"></td>
        </tr>
        </div>

        
        `
    }
}

mostrarLista();
document.getElementById("botao").addEventListener("click", adicionarMedicamento);
