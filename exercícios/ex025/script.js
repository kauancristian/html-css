// script.js

// Seleciona o link e o div com os dados
const link = document.getElementById('financas');
const dados = document.getElementById('dados');

// Adiciona um ouvinte de evento para o clique no link
link.addEventListener('click', function(event) {
    event.preventDefault(); // Impede que o link navegue para outra página

    // Verifica se os dados estão escondidos ou não
    if (dados.classList.contains('escondido')) {
        dados.classList.remove('escondido'); // Remove a classe 'escondido', mostrando os dados
        link.textContent = 'Finanças'; // Altera o texto do link
    } else {
        dados.classList.add('escondido'); // Adiciona a classe 'escondido', escondendo os dados
        link.textContent = 'Finanças'; // Altera o texto do link
    }
});
