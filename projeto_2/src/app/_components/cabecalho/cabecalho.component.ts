import { Component, inject } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { MagoComponent } from "../mago/mago.component";
import { SobreComponent } from "../sobre/sobre.component";
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Importando o operador map
import { CommonModule } from '@angular/common';  // Importando o CommonModule

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormularioComponent, MagoComponent, SobreComponent, CommonModule],  // Adicionando CommonModule aqui
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  isMagoOpen = false;
  isSobreOpen = false;

  // Injetando o serviço de autenticação
  authService = inject(AuthService);

  // Ajustando o tipo do usuarioLogado$ para ser um objeto com a propriedade nome
  usuarioLogado$: Observable<{ nome: string } | null> = this.authService.usuarioLogado$.pipe(
    map(usuario => usuario ? usuario : null)  // Certificando-se de que o objeto de usuário está correto
  );

  // Funções para abrir e fechar os modais
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

  // Função de logout
  logout() {
    this.authService.logout();
  }
}

