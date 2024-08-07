import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioViewComponent } from './bio-view.component';

describe('BioViewComponent', () => {
  let component: BioViewComponent;
  let fixture: ComponentFixture<BioViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioViewComponent]
    });
    fixture = TestBed.createComponent(BioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
