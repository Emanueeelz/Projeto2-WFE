import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDarkSoulsComponent } from './pagina-dark-souls.component';

describe('PaginaDarkSoulsComponent', () => {
  let component: PaginaDarkSoulsComponent;
  let fixture: ComponentFixture<PaginaDarkSoulsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDarkSoulsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDarkSoulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
