import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {
codigo: number = 69
nome: string = "Jack Beagle"
curso: string = "Super foda Dev JAVA"
}
