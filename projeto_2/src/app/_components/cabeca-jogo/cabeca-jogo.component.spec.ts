import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecaJogoComponent } from './cabeca-jogo.component';

describe('CabecaJogoComponent', () => {
  let component: CabecaJogoComponent;
  let fixture: ComponentFixture<CabecaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecaJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
