const form = document.querySelector('form');
const inputNome = document.querySelector('#nameInput');
const inputQuantidade = document.querySelector('#numberInput');
const inputPreco = document.querySelector('#priceInput');
const inputMedicamento = document.querySelector('#medInput');
const botao = document.querySelector('#botao');

botao.addEventListener('click', function() {
  const nome = inputNome.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;
  const medicamento = inputMedicamento.value;

  if (!nome || !quantidade || !preco || !medicamento) {
    if (!nome || !quantidade || !preco || !medicamento) {
      const div = document.createElement('div');
        div.id = 'med'
        div.innerHTML = '<p style="font-weight: 800;">Desculpe, não foi possível concluir o cadastro.</p><p style="margin-top: 2em;">Você precisa preencher todos os campos para cadastrar o medicamento.</p>';
        div.style.background = 'rgba(0, 0, 0, 0.82)';
        div.style.color = '#FFFFFF';
        div.style.padding = '10px';
        div.style.position = 'absolute';
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid #767373'
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.fontFamily = 'Alegreya Sans SC';
        div.style.fontStyle = 'normal';
        div.style.fontWeight = '400';
        div.style.fontSize = '28px';
        div.style.lineHeight = '34px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'flex-end';

        const button = document.createElement('button');
        button.innerText = 'OK';
        button.style.backgroundColor = '#8CADF7';
        button.style.color = '#FFFFFF';
        button.style.border = 'none';
        button.style.width = '120px';
        button.style.height = '50px';
        button.style.padding = '12px 20px';
        button.style.marginTop = '10px';
        button.style.marginLeft = 'auto';
        button.style.fontFamily = 'Alegreya Sans SC';
        button.style.fontSize =  '28px';
        button.id = 'okButton'


      
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
