import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';
import { ListaAluno } from './componentes/lista-aluno/lista-aluno';
import { Aluno } from './componentes/aluno/aluno';
import { popNumber } from 'rxjs/internal/util/args';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
}
)


export class App {
  aprovados: string = ''
  //aprovados: string = 'cards aprovados'
  // aprovados: string = 'lista aprovados'
  //seleciona se quer exibir os cards ou a tabela
  //exibicao: string = 'cards'
    exibicao: string = 'lista'

  //--------------------------------------------------//
ngOnInit():void{
  this.listaFiltro= this.listaAlunos;
}


  protected title = 'controle-de-alunos';
  listaAlunos: AlunoInterface[] = [
    {
      foto: "../../../assets/img/Reiner_Braun_29_character_image_29.jpg",
      codigo: 15674,
      matricula: 1,
      nome: 'João Vitor Spezia',
      email: 'joaovitorspezia@gmail.com',
      cadastro: false,
      cursos: [
        'Java ', 'JS'
      ],
      notas: [1,10,4]
    },
    {
      foto: "../../../assets/img/Jack.jpg",
      codigo: 2345,
      matricula: 3,
      nome: 'Jack Beagle',
      email: 'joaospezia14@gmail.com',
      cadastro: true,
      cursos: [
        'Java ', 'JS', "Alcoolismo"
      ],
      notas: [6,7,9]
    },
    {
      foto: "../../../assets/img/anamaria.jpg",
      codigo: 3124,
      matricula: 2,
      nome: 'Anamaria',
      email: 'anamaria@gmail.com',
      cadastro: true,
      cursos: [
        'JS ', 'HTML'
      ],
      notas: [9,5,4],
   
    },
    {
      foto: "../../../assets/img/bolsonarainha.jpg",
      codigo: 3524,
      matricula: 36,
      nome: 'Bolsonaria',
      email: 'mitadetudo@gmail.com',
      cadastro: true,
      cursos: [
        'JS ', 'HTML'
      ],
      notas: [9,7,4],
    
    },
    {
      foto: "../../../assets/img/RenatoMoicano.webp",
      codigo: 7114,
      matricula: 53,
      nome: 'Renato Moicano',
      email: 'esquecatudo@gmail.com',
      cadastro: false,
      cursos: [
        'MMA', 'Bet'
      ],
      notas: [0,-3,4],
    
    },
  ]


  listaFiltro: AlunoInterface[]= [];

  
  alterarExibicao(): void {

    //Implementar a regra da função
    
    if (this.exibicao == "cards" || this.aprovados == "cards aprovados") {
      this.aprovados = ''
      this.exibicao = "lista" 
    }
    else if (this.exibicao == "lista" ||  this.aprovados == "lista aprovados") {
      this.aprovados = ''
      this.exibicao = "cards"
    }
  }

  cadastrados(): void {

this.listaFiltro
=[]

  this.listaAlunos.forEach(aluno =>{
    if(aluno.cadastro == true){
      this.listaFiltro
      .push(aluno)
    }
  })
  }

Naocadastrados():void{

  this.listaFiltro
  =[]

  this.listaFiltro
   = this.listaAlunos.filter(aluno=>{
    return aluno.cadastro == false
  })
}

exibirtodos(): void{
  this.listaFiltro= this.listaAlunos;
  
}


filtrarAlunos(filtro:string):void{
if(filtro == 'aprovados'){
  this.listaFiltro = this.listaAlunos.filter(aluno => {return aluno.cadastro==true})
}else if (filtro == 'reprovados'){
  this.listaFiltro = this.listaAlunos.filter(aluno => {return aluno.cadastro==false})
}else if(filtro== "todos"){
  this.listaFiltro=this.listaAlunos
}

}

onExcluir(matricula:number): void{
  
   this.listaAlunos.forEach((aluno, index) => {
    if(aluno.matricula == matricula){
      this.listaAlunos.splice(index,1)

    }
    
   });
}
}













// if (this.exibicao == "cards") {

  // this.aprovados = "cards aprovados"
  // this.exibicao = ""
// }
// else if (this.exibicao == "lista") {
   
  //this.aprovados = "lista aprovados"
 //  this.exibicao = ""

 