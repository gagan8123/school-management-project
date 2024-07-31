import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksTableComponent } from './marks-table.component';

describe('MarksTableComponent', () => {
  let component: MarksTableComponent;
  let fixture: ComponentFixture<MarksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarksTableComponent]
    });
    fixture = TestBed.createComponent(MarksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
