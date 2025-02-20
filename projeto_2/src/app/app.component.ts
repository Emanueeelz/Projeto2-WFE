
import { Component } from '@angular/core';
import { CabecalhoComponent } from './_components/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { CorpoSiteComponent } from "./_components/corpo-site/corpo-site.component"; // Importando RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    RouterModule // Incluindo RouterModule no imports para usar router-outlet
    ,
    CorpoSiteComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_2';
}
