import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDepartComponent } from './prof-depart.component';

describe('ProfDepartComponent', () => {
  let component: ProfDepartComponent;
  let fixture: ComponentFixture<ProfDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
