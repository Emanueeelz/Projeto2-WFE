import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogadoSubject = new BehaviorSubject<{ nome: string, email: string } | null>(null);
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  constructor() {}

  login(nome: string, email: string) {
    this.usuarioLogadoSubject.next({ nome, email });
  }

  logout() {
    this.usuarioLogadoSubject.next(null);
  }
}
