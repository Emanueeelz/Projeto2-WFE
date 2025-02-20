import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importa o AuthService
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],  // Adiciona FormsModule para ngModel funcionar
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';  // Variável para armazenar o nome
  email: string = '';  // Variável para armazenar o e-mail
  senha: string = '';  // Variável para armazenar a senha (não será usada agora)

  // Injetando o AuthService
  authService = inject(AuthService);

  // Método de login chamado ao enviar o formulário
  login() {
    if (this.nome && this.email) {
      this.authService.login(this.nome, this.email);  // Passa nome e e-mail
    }
  }
}

