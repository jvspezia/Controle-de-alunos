import { Component , EventEmitter, Input, Output} from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-lista-aluno',
  standalone: false,
  templateUrl: './lista-aluno.html',
  styleUrl: './lista-aluno.css'
})
export class ListaAluno {
 
@Output()
excluir:EventEmitter<number>= new EventEmitter()

@Input()
lista:AlunoInterface[]=[]

excluirAluno(matricula:number):void{
this.excluir.emit(matricula)
}
}
