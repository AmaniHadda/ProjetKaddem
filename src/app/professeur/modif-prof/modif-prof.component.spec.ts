import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProfComponent } from './modif-prof.component';

describe('ModifProfComponent', () => {
  let component: ModifProfComponent;
  let fixture: ComponentFixture<ModifProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
