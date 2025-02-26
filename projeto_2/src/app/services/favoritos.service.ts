import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: Set<string> = new Set();
  private favoritosSubject = new BehaviorSubject<string[]>(this.carregarFavoritos());
  private fecharModalFavoritosSubject = new BehaviorSubject<boolean>(false); // Controle do fechamento do modal

  constructor() {}

  /** Carrega os favoritos do localStorage */
  private carregarFavoritos(): string[] {
    const savedFavoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.favoritos = new Set(savedFavoritos);
    return this.getFavoritos();
  }

  /** Adiciona ou remove um jogo dos favoritos */
  toggleFavorito(jogo: string) {
    if (this.favoritos.has(jogo)) {
      this.favoritos.delete(jogo);
    } else {
      this.favoritos.add(jogo);
    }
    this.salvarFavoritos();
  }

  /** Verifica se um jogo está nos favoritos */
  isFavorito(jogo: string): boolean {
    return this.favoritos.has(jogo);
  }

  /** Retorna a lista de favoritos */
  getFavoritos(): string[] {
    return Array.from(this.favoritos);
  }

  /** Retorna um Observable da lista de favoritos */
  getFavoritosObservable() {
    return this.favoritosSubject.asObservable();
  }

  /** Atualiza o localStorage e notifica sobre mudanças nos favoritos */
  private salvarFavoritos() {
    const favoritosArray = this.getFavoritos();
    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));

    // Atualiza somente se houver mudança real
    if (JSON.stringify(favoritosArray) !== JSON.stringify(this.favoritosSubject.value)) {
      this.favoritosSubject.next(favoritosArray);
    }
  }

  /** Dispara evento para fechar o modal de favoritos */
  fecharModalFavoritos() {
    this.fecharModalFavoritosSubject.next(true); // Define que o modal deve ser fechado

    // Reseta o valor após um pequeno delay para evitar efeitos colaterais
    setTimeout(() => this.fecharModalFavoritosSubject.next(false), 100);
  }

  /** Retorna um Observable para escutar eventos de fechamento do modal */
  getFecharModalFavoritosObservable() {
    return this.fecharModalFavoritosSubject.asObservable();
  }
}


