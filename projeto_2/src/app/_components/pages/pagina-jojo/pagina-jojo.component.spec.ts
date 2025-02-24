import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJojoComponent } from './pagina-jojo.component';

describe('PaginaJojoComponent', () => {
  let component: PaginaJojoComponent;
  let fixture: ComponentFixture<PaginaJojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaJojoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaJojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
