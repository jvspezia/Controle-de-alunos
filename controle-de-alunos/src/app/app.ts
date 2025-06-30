import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'controle-de-alunos';
  
  listaAlunos: AlunoInterface[] = [
    {
      codigo: 1,
      matricula: 1,
      nome: 'João Vitor Spezia',
      email: 'joaovitorspezia13891@gmail.com',
      cadastro: false,
      cursos: [
        'Java ', 'JS'
      ]
    },
    {
      codigo: 2,
      matricula: 2,
      nome: 'Jack Beagle',
      email: 'joaospezia14@gmail.com',
      cadastro: false,
      cursos: [
        'Java ', 'JS'
      ]
    }
  ]
  
}