import { Component, Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {
  //Criando objeto
  @Input()
  aluno!: AlunoInterface 

media:string= ''
  //Função que executa primeiro quando o app-aluno for chamado
ngOnInit():void{
  this.media = this.calcularMedia()  
}
calcularMedia(): string{
  
  let soma: number = 0
this.aluno.notas.forEach(nota => {
  soma += nota //soma recebe soma + nota

});


const media: number = soma/this.aluno.notas.length
return media.toFixed(1)
}
}


