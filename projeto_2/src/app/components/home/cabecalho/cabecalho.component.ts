import { Component, inject } from '@angular/core';
import { FormularioComponent } from "../../home/formulario/formulario.component";
import { MagoComponent } from "../mago/mago.component";
import { SobreComponent } from "../sobre/sobre.component";
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from '../../home/favoritos/favoritos.component';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormularioComponent, MagoComponent, SobreComponent, FavoritosComponent, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  isMagoOpen = false;
  isSobreOpen = false;
  isFavoritoOpen = false;

  authService = inject(AuthService);

  usuarioLogado$: Observable<{ nome: string } | null> = this.authService.usuarioLogado$.pipe(
      map(usuario => usuario ? usuario : null)
    );
  
    mostrarFavoritos = false;
  ;

  abrirMago() {
    this.isMagoOpen = true;
  }

  fecharMago() {
    this.isMagoOpen = false;
  }

  abrirSobre() {
    this.isSobreOpen = true;
  }

  fecharSobre() {
    this.isSobreOpen = false;
  }

  abrirFavorito() {
    this.isFavoritoOpen = true;
  }

  fecharFavorito() {
    this.isFavoritoOpen = false;
  }

  logout() {
    this.authService.logout();
  }
}

