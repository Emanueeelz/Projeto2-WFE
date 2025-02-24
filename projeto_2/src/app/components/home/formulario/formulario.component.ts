import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  authService = inject(AuthService);

  login() {
    if (this.nome && this.email) {
      this.authService.login(this.nome, this.email);
    }
  }
}

