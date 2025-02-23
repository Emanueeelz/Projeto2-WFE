import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: string[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit() {
    this.favoritosService.getFavoritosObservable().subscribe(favs => {
      this.favoritos = favs;
    });
  }
}
