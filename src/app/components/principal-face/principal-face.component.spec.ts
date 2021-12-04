import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalFaceComponent } from './principal-face.component';

describe('PrincipalFaceComponent', () => {
  let component: PrincipalFaceComponent;
  let fixture: ComponentFixture<PrincipalFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
