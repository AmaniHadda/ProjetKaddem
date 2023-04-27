import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeaffectComponent } from './diplomeaffect.component';

describe('DiplomeaffectComponent', () => {
  let component: DiplomeaffectComponent;
  let fixture: ComponentFixture<DiplomeaffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeaffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeaffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
