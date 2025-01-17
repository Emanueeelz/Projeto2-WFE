import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClashComponent } from './pagina-clash.component';

describe('PaginaClashComponent', () => {
  let component: PaginaClashComponent;
  let fixture: ComponentFixture<PaginaClashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaClashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaClashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
