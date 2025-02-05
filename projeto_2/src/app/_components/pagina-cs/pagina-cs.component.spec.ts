import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCsComponent } from './pagina-cs.component';

describe('PaginaCsComponent', () => {
  let component: PaginaCsComponent;
  let fixture: ComponentFixture<PaginaCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
