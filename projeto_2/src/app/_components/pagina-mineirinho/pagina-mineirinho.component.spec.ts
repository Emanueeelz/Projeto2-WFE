import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMineirinhoComponent } from './pagina-mineirinho.component';

describe('PaginaMineirinhoComponent', () => {
  let component: PaginaMineirinhoComponent;
  let fixture: ComponentFixture<PaginaMineirinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMineirinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMineirinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
