import { Component , Input} from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-lista-aluno',
  standalone: false,
  templateUrl: './lista-aluno.html',
  styleUrl: './lista-aluno.css'
})
export class ListaAluno {

@Input()
lista:AlunoInterface[]=[]
}
