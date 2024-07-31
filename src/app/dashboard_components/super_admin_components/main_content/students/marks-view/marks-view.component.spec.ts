import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksViewComponent } from './marks-view.component';

describe('MarksViewComponent', () => {
  let component: MarksViewComponent;
  let fixture: ComponentFixture<MarksViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksViewComponent]
    });
    fixture = TestBed.createComponent(MarksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
