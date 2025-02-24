import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../../services/favoritos.service';

@Component({
  selector: 'app-cabeca-jogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabeca-jogo.component.html',
  styleUrls: ['./cabeca-jogo.component.css']
})
export class CabecaJogoComponent {
  favoritosService = inject(FavoritosService);
  favoritos: string[] = [];

  constructor() {
    this.favoritosService.getFavoritosObservable().subscribe(favs => {
      this.favoritos = favs;
    });
  }
}