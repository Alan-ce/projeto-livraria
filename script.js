const lista_livros = document.getElementById('lista_livros');
const form_livro = document.getElementById('form_livro');
const pesquisa_input = document.getElementById('pesquisa_input');

let livros = JSON.parse(localStorage.getItem('livros')) || [
    {
        "titulo": "Os sussurros",
        "autor": "Ashley Audrain",
        "genero": "Suspense, Mistério, Suspense psicológico, Ficção Doméstica",
        "data_publicacao": "2024-04-08"
    },
    {
        "titulo": "O Lugar errado, hora errada",
        "autor": "Gillian McAllister",
        "genero": "Suspense, Mistério",
        "data_publicacao": "2024-01-29"
    },
    {
        "titulo": "Os maridos",
        "autor": "Holly Gramazio",
        "genero": "Romance de amor, Humor, Realismo mágico, Ficção humorística, Ficção Doméstica",
        "data_publicacao": "2024-04-02"
    },
    {
        "titulo": "Nadando no escuro",
        "autor": "Tomasz Jedrowski",
        "genero": "Ficção de novo adulto, Literatura LGBT, Ficção gay",
        "data_publicacao": "2024-03-11"
    },
    {
        "titulo": "Conversas na madrugada",
        "autor": "Claire Daverley",
        "genero": "Romance contemporâneo, Amadurecimento, Ficção de novo adulto",
        "data_publicacao": "2024-05-21"
    },
    {
        "titulo": "Carlabê",
        "autor": "Isabela Noronha",
        "genero": "Ficção literária",
        "data_publicacao": "2024-05-07"
    },
    {
        "titulo": "Não é amor",
        "autor": "Ali Hazelwood",
        "genero": "Romance de amor, Ficção, Romance contemporâneo",
        "data_publicacao": "2024-06-12"
    },
    {
        "titulo": "As irmãs Blue",
        "autor": "Coco Mellors",
        "genero": "Ficção urbana",
        "data_publicacao": "2024-05-10"
    },
];

function exibirLivros(livrosParaExibir) {
    lista_livros.innerHTML = '';
    livrosParaExibir.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const titulo = document.createElement('h2');
        titulo.textContent = livro.titulo;
        
        const autor = document.createElement('p');
        autor.innerHTML = `<strong>Autor:</strong> ${livro.autor}`;
        
        const genero = document.createElement('p');
        genero.innerHTML = `<strong>Gênero:</strong> ${livro.genero}`;
        
        const data = document.createElement('p');
        data.innerHTML = `<strong>Data de Publicação:</strong> ${livro.data_publicacao}`;
        
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(genero);
        card.appendChild(data);
        
        lista_livros.appendChild(card);
    });
}

exibirLivros(livros);

form_livro.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const novoLivro = {
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        genero: document.getElementById('genero').value,
        data_publicacao: document.getElementById('data_publicacao').value
    };

    livros.push(novoLivro);
    localStorage.setItem('livros', JSON.stringify(livros));
    exibirLivros(livros);
    form_livro.reset();
});

function buscar_livros() {
    const termoBusca = pesquisa_input.value.toLowerCase();
    const livrosFiltrados = livros.filter(livro => 
        livro.titulo.toLowerCase().includes(termoBusca) || 
        livro.autor.toLowerCase().includes(termoBusca) || 
        livro.genero.toLowerCase().includes(termoBusca) || 
        livro.data_publicacao.includes(termoBusca)
    );
    exibirLivros(livrosFiltrados);
}
