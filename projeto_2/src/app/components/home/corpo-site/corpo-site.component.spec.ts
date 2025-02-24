import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoSiteComponent } from './corpo-site.component';

describe('CorpoSiteComponent', () => {
  let component: CorpoSiteComponent;
  let fixture: ComponentFixture<CorpoSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
