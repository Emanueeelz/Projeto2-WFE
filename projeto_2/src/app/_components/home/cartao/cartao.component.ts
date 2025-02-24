import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../../services/favoritos.service';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {
  @Input() jogo: any;

  constructor(private favoritosService: FavoritosService) {}

  toggleFavorito(jogo: any) {
    this.favoritosService.toggleFavorito(jogo);
  }

  isFavorito(jogo: any): boolean {
    return this.favoritosService.isFavorito(jogo);
  }
}
