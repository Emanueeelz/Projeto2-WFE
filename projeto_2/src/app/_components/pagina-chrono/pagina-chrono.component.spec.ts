import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaChronoComponent } from './pagina-chrono.component';

describe('PaginaChronoComponent', () => {
  let component: PaginaChronoComponent;
  let fixture: ComponentFixture<PaginaChronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaChronoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
