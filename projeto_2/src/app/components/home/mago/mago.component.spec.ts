import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagoComponent } from './mago.component';

describe('MagoComponent', () => {
  let component: MagoComponent;
  let fixture: ComponentFixture<MagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
