import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCyberComponent } from './pagina-cyber.component';

describe('PaginaCyberComponent', () => {
  let component: PaginaCyberComponent;
  let fixture: ComponentFixture<PaginaCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCyberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
