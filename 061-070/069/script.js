// Integrar todos os conceitos aprendidos.

// Enunciado
// Crie duas classes:

// Livro
// Biblioteca

// Cada livro possui:
// título
// autor
// disponível (boolean)

// A biblioteca deve permitir:

// adicionar livros
// emprestar livro
// devolver livro
// listar livros disponíveis

// Requisitos
// Utilizar classes
// Métodos
// Arrays
// Objetos
// Encapsular a lógica dentro da classe Biblioteca

class Livro {
  constructor(titulo, autor, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
}

class Biblioteca {
  constructor(acervo = []) {
    this.acervo = acervo;
  }

  adicionarLivro(livro) {
    this.acervo.push(livro);
    console.log(`O livro ${livro.titulo} foi adicionado a biblioteca`);
  }

  emprestarLivro(livro) {
    if (livro.disponivel && this.acervo.includes(livro)) {
      console.log("Livro emprestado");
      this.acervo = this.acervo.filter((item) => item !== livro);
    } else {
      console.log("Livro não disponível para emprestimo!");
    }
  }

  devolverLivro(livro) {
    this.acervo.push(livro);
    console.log("Livro adicionado com sucesso!s");
  }

  mostrarAcervo() {
    console.log(this.acervo);
  }
}

const livro1 = new Livro("Casa Velha", "Machado de Assis", true);
const livro2 = new Livro("1984", "George Orwell", true);
const livro3 = new Livro("Jogos Vorazes", "Suzanne Collins", true);

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);

minhaBiblioteca.mostrarAcervo();

minhaBiblioteca.emprestarLivro(livro1);

minhaBiblioteca.mostrarAcervo();

minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.devolverLivro(livro1);

minhaBiblioteca.mostrarAcervo();
