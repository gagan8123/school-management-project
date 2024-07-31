import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBioViewComponent } from './t-bio-view.component';

describe('TBioViewComponent', () => {
  let component: TBioViewComponent;
  let fixture: ComponentFixture<TBioViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TBioViewComponent]
    });
    fixture = TestBed.createComponent(TBioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
