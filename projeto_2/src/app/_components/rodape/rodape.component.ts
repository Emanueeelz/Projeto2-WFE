import { Component } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [ContatoComponent],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
