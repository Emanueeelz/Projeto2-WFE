import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: Set<string> = new Set();
  private favoritosSubject = new BehaviorSubject<string[]>(this.carregarFavoritos());
  private fecharModalFavoritosSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  private carregarFavoritos(): string[] {
    const savedFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.favoritos = new Set(savedFavoritos);
    return this.getFavoritos();
  }

  toggleFavorito(jogo: string) {
    if (this.favoritos.has(jogo)) {
      this.favoritos.delete(jogo);
    } else {
      this.favoritos.add(jogo);
    }
    this.salvarFavoritos();
  }

  isFavorito(jogo: string): boolean {
    return this.favoritos.has(jogo);
  }

  getFavoritos(): string[] {
    return Array.from(this.favoritos);
  }

  getFavoritosObservable() {
    return this.favoritosSubject.asObservable();
  }

  private salvarFavoritos() {
    const favoritosArray = this.getFavoritos();
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));

    if (JSON.stringify(favoritosArray) !== JSON.stringify(this.favoritosSubject.value)) {
      this.favoritosSubject.next(favoritosArray);
    }
  }

  fecharModalFavoritos() {
    this.fecharModalFavoritosSubject.next(true);

    setTimeout(() => this.fecharModalFavoritosSubject.next(false), 100);
  }

  getFecharModalFavoritosObservable() {
    return this.fecharModalFavoritosSubject.asObservable();
  }
}


