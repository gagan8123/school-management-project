import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAttendenceViewComponent } from './t-attendence-view.component';

describe('TAttendenceViewComponent', () => {
  let component: TAttendenceViewComponent;
  let fixture: ComponentFixture<TAttendenceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TAttendenceViewComponent]
    });
    fixture = TestBed.createComponent(TAttendenceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
