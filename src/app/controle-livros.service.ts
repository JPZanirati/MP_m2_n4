import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo:
        'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (00) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo:
        'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software.com os livros Deitel.',
      autores: ['Paul Deitel', 'Harvey Deitel'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Padrões JavaScript',
      resumo:
        'Qual é a melhor maneira de desenvolver uma aplicação em JavaScript? Este livro, ao apresentar inúmeros padrões e as melhores práticas no JavaScript, vai ajudá-lo a responder a essa pergunta.',
      autores: ['Stoyan Stefanov'],
    },
  ];

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = Math.max(...this.livros.map((l) => l.codigo));
    livro.codigo = codigoMaisAlto + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
