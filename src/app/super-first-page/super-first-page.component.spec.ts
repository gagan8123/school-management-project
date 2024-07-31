import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperFirstPageComponent } from './super-first-page.component';

describe('SuperFirstPageComponent', () => {
  let component: SuperFirstPageComponent;
  let fixture: ComponentFixture<SuperFirstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperFirstPageComponent]
    });
    fixture = TestBed.createComponent(SuperFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
