import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRedDeadComponent } from './pagina-red-dead.component';

describe('PaginaRedDeadComponent', () => {
  let component: PaginaRedDeadComponent;
  let fixture: ComponentFixture<PaginaRedDeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaRedDeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRedDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
