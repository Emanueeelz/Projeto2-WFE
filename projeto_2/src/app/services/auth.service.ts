import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogadoSubject = new BehaviorSubject<{ nome: string, email: string } | null>(null);
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  private fecharPopupSubject = new BehaviorSubject<boolean>(false);
  fecharPopup$ = this.fecharPopupSubject.asObservable();

  constructor() {}

  login(nome: string, email: string) {
    this.usuarioLogadoSubject.next({ nome, email });
    this.fecharPopupSubject.next(true); // Emite o evento para fechar o modal
  }

  logout() {
    this.usuarioLogadoSubject.next(null);
  }
}


