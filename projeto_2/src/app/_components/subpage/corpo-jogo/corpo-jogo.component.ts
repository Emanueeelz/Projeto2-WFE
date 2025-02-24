import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-corpo-jogo',
  standalone: true,
  imports: [],
  templateUrl: './corpo-jogo.component.html',
  styleUrl: './corpo-jogo.component.css'
})
export class CorpoJogoComponent {
  @Input() titulo: string = 'Título da Página';
}

