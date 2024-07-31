import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupTopBarComponent } from './sup-top-bar.component';

describe('SupTopBarComponent', () => {
  let component: SupTopBarComponent;
  let fixture: ComponentFixture<SupTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupTopBarComponent]
    });
    fixture = TestBed.createComponent(SupTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
