import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corpo-jogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corpo-jogo.component.html',
  styleUrls: ['./corpo-jogo.component.css']
})
export class CorpoJogoComponent implements OnChanges {
  @Input() jogo: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Mudança detectada no jogo:", changes['jogo']?.currentValue);
  }
}
