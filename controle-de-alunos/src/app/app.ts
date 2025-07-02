import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  //seleciona se quer exibir os cards ou a tabela
    exibicao: string = 'cards'
 // exibicao: string = 'lista'

//--------------------------------------------------//


  protected title = 'controle-de-alunos';
  
  listaAlunos: AlunoInterface[] = [
    {
      foto:"../../../assets/img/Reiner_Braun_29_character_image_29.jpg",
      codigo: 15674,
      matricula: 1,
      nome: 'João Vitor Spezia',
      email: 'joaovitorspezia@gmail.com',
      cadastro: false,
      cursos: [
        'Java ', 'JS'
      ]
    },
    {
      foto: "../../../assets/img/Jack.jpg",
      codigo: 2345,
      matricula: 3,
      nome: 'Jack Beagle',
      email: 'joaospezia14@gmail.com',
      cadastro: true,
      cursos: [
        'Java ', 'JS',"Alcoolismo"
      ]
    },
    {
      foto:"../../../assets/img/anamaria.jpg",
      codigo: 3124,
      matricula: 3,
      nome: 'Anamaria',
      email: 'anamaria@gmail.com',
      cadastro: true,
      cursos: [
        'JS ', 'HTML'
      ]
    }
  ]
}