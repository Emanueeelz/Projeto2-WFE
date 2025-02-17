import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoJogoComponent } from './corpo-jogo.component';

describe('CorpoJogoComponent', () => {
  let component: CorpoJogoComponent;
  let fixture: ComponentFixture<CorpoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
