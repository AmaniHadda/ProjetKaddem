import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesAffectComponent } from './salles-affect.component';

describe('SallesAffectComponent', () => {
  let component: SallesAffectComponent;
  let fixture: ComponentFixture<SallesAffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesAffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
