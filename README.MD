![Design sem nome](https://github.com/danibenfica/Projeto-Farmacia-DNC/assets/103818625/ffc94283-c138-4774-9070-f03fc774abb0)

## Projeto Farmácia

O projeto "Farmácia" consiste em dois projetos: "Farmácia Simples" e "Farmácia Avançada". Ambos os projetos são sistemas de cadastro de medicamentos em uma farmácia. Aqui detalharei cada um individualmente!

### Farmácia Simples

O projeto "Farmácia Simples" oferece uma versão básica do sistema de cadastro de medicamentos. Ele utiliza as seguintes tecnologias:

- HTML: Para estruturação da página.
- CSS: Para estilização dos elementos.
- JavaScript: Para fornecer a funcionalidade do sistema.

O arquivo `index.html` contém a estrutura básica da página, incluindo um formulário para cadastro de medicamentos. O arquivo `script.js` é responsável por manipular os elementos do formulário e realizar as ações de cadastro.

Principais Funcionalidades:
1. Cadastro de Medicamentos: O usuário pode preencher os campos do formulário, como nome do medicamento, quantidade disponível, preço por unidade e classe do medicamento. Ao clicar no botão "Cadastrar", o medicamento é adicionado à lista.

```javascript
botao.addEventListener('click', function() {
  const nome = inputNome.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;
  const medicamento = inputMedicamento.value;

  if (!nome || !quantidade || !preco || !medicamento) {
    if (!nome || !quantidade || !preco || !medicamento) {
      const div = document.createElement('div');

      //elementos aqui
      
      div.appendChild(button);
      
        document.body.appendChild(div);
      
        button.addEventListener('click', function() {
          document.body.removeChild(div);
        });
      }
      

  } else {

    console.log(nome, quantidade, preco, medicamento);

    const form = document.querySelector('#form');
    form.innerHTML = `
      <p style="margin-left: 2em;">Novo medicamento adicionado!</p>
      <p>Nome: ${nome}</p>
      <p>Unidades disponíveis: ${quantidade}</p>
      <p>Preço por unidade: R$ ${preco}</p>
      <p>Classe de Medicamento: ${medicamento}</p>
    `;

    botao.value = 'Voltar';
    botao.id = 'voltar'

    botao.addEventListener('click', function() {
      window.location.href = 'index.html'; 
    });
  }
});


```

2. Validação de Campos: Antes de adicionar o medicamento à lista, o sistema verifica se todos os campos do formulário estão preenchidos. Caso algum campo esteja vazio, um alerta é exibido solicitando que o usuário preencha todos os campos.
```javascript
if (!nome || !quantidade || !preco || !medicamento) {
    if (!nome || !quantidade || !preco || !medicamento) {
      const div = document.createElement('div');
        div.id = 'med'
        div.innerHTML = '<p style="font-weight: 800;">Desculpe, não foi possível concluir o cadastro.</p><p style="margin-top: 2em;">Você precisa preencher todos os campos para cadastrar o medicamento.</p>';}}
```

3. Exibição da Lista de Medicamentos: Após cadastrar um medicamento, a lista de medicamentos é exibida em uma tabela abaixo do formulário. A tabela mostra o ID do medicamento, seu nome, quantidade disponível, preço por unidade, classe do medicamento e um botão para remover o medicamento da lista.
```javascript
    console.log(nome, quantidade, preco, medicamento);

    const form = document.querySelector('#form');
    form.innerHTML = `
      <p style="margin-left: 2em;">Novo medicamento adicionado!</p>
      <p>Nome: ${nome}</p>
      <p>Unidades disponíveis: ${quantidade}</p>
      <p>Preço por unidade: R$ ${preco}</p>
      <p>Classe de Medicamento: ${medicamento}</p>
    `;

```

### Farmácia Avançada

O projeto "Farmácia Avançada" é uma versão mais completa do sistema de cadastro de medicamentos. Ele também utiliza as mesmas tecnologias do projeto "Farmácia Simples": HTML, CSS e JavaScript.


Principais Funcionalidades Adicionais:
1. Lista de Medicamentos: O projeto utiliza um array chamado `medicamentos` para armazenar os medicamentos cadastrados.
```javascript
let medicamentos = [];
```

2. Adicionar Medicamento: A função `adicionarMedicamento()` captura os valores dos campos do formulário e adiciona um novo objeto de medicamento ao array `medicamentos`. Antes de adicionar o medicamento, são realizadas verificações para garantir que todos os campos estejam preenchidos.
```javascript
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
```

3. Excluir Medicamento: A função `excluirMed(index)` permite remover um medicamento da lista com base no seu índice no array `medicamentos`.
```javascript
function excluirMed(index){
    medicamentos.splice(index,1);
    mostrarLista();
}
```

4. Mostrar Lista de Medicamentos: A função `mostrarLista()` exibe os medicamentos cadastrados na tabela. Ela percorre o array `medicamentos` e cria as linhas da tabela com as informações de cada medicamento, incluindo um botão para excluir o medicamento.
```javascript
function  mostrarLista() {
    let listaMeds = document.getElementById("tableMed");
    listaMeds.innerHTML = //lista aqui
    }
```

Conclusão

Ambos os projetos utilizam tecnologias web, como HTML, CSS e JavaScript, para criar a interface do usuário e fornecer a funcionalidade do sistema. O "Farmácia Avançada" apresenta recursos adicionais, como armazenamento em array, exclusão de medicamentos e exibição da lista na tabela.

Os dois servem para os estudos de JavaScript e manipulação do DOM, reforçando os conceitos aprendidos nas aulas anteriores do curso.

Qualquer dúvida ou sugestão, não hesite em me perguntar! :heart: