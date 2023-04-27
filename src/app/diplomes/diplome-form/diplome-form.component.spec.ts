import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeFormComponent } from './diplome-form.component';

describe('DiplomeFormComponent', () => {
  let component: DiplomeFormComponent;
  let fixture: ComponentFixture<DiplomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
