import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBlasComponent } from './pagina-blas.component';

describe('PaginaBlasComponent', () => {
  let component: PaginaBlasComponent;
  let fixture: ComponentFixture<PaginaBlasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBlasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaBlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
