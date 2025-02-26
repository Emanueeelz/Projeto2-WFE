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
removerBackdrop() {
throw new Error('Method not implemented.');
}
  isMagoOpen = false;
  isSobreOpen = false;
  isFavoritoOpen = false;

  authService = inject(AuthService);

  usuarioLogado$: Observable<{ nome: string; email: string } | null> = this.authService.usuarioLogado$.pipe(
    map(usuario => usuario ? { nome: usuario.nome, email: usuario.email } : null)
  );

  togglePopup() {
    const sairModal = document.getElementById('sairModal');
    if (sairModal) {
      sairModal.style.display = 'block';
      sairModal.classList.add('show');
    }
  }

  closePopup() {
    const sairModal = document.getElementById('sairModal');
    if (sairModal) {
      sairModal.style.display = 'none';
      sairModal.classList.remove('show');
    }
  }


  logout() {
    this.authService.logout();
  }
}

