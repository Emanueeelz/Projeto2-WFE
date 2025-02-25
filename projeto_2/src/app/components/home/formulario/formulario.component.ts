import { Component, inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';

  authService = inject(AuthService);

  @ViewChild('loginModal') loginModal!: ElementRef;

  ngOnInit() {
    this.authService.fecharPopup$.subscribe((fechar) => {
      if (fechar && this.loginModal) {
        (this.loginModal.nativeElement as any).click(); // Fecha o modal Bootstrap
      }
    });
  }

  login() {
    if (this.nome && this.email) {
      this.authService.login(this.nome, this.email);
    }
  }
}

