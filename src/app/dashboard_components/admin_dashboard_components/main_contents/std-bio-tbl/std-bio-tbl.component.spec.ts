import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdBioTblComponent } from './std-bio-tbl.component';

describe('StdBioTblComponent', () => {
  let component: StdBioTblComponent;
  let fixture: ComponentFixture<StdBioTblComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdBioTblComponent]
    });
    fixture = TestBed.createComponent(StdBioTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
