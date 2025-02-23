import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: Set<string> = new Set();
  private favoritosSubject = new BehaviorSubject<string[]>([]);

  constructor() {
    this.carregarFavoritos(); 
  }

  private carregarFavoritos() {

    const savedFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.favoritos = new Set(savedFavoritos);
    this.atualizarSubject();
  }


  toggleFavorito(jogo: string) {
    if (this.favoritos.has(jogo)) {
      this.favoritos.delete(jogo);
    } else {
      this.favoritos.add(jogo);
    }
    this.atualizarSubject();
  }

  isFavorito(jogo: string): boolean {
    return this.favoritos.has(jogo);
  }

  getFavoritos() {
    return Array.from(this.favoritos);
  }

  getFavoritosObservable() {
    return this.favoritosSubject.asObservable();
  }

  private atualizarSubject() {
    this.favoritosSubject.next(this.getFavoritos());
  }
}
