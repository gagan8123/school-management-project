import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TClassesViewComponent } from './t-classes-view.component';

describe('TClassesViewComponent', () => {
  let component: TClassesViewComponent;
  let fixture: ComponentFixture<TClassesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TClassesViewComponent]
    });
    fixture = TestBed.createComponent(TClassesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
