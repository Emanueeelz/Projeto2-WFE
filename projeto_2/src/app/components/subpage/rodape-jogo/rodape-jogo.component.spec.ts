import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeJogoComponent } from './rodape-jogo.component';

describe('RodapeJogoComponent', () => {
  let component: RodapeJogoComponent;
  let fixture: ComponentFixture<RodapeJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapeJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapeJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
