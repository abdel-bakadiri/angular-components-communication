import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteraFilterComponent } from './critera-filter.component';

describe('CriteraFilterComponent', () => {
  let component: CriteraFilterComponent;
  let fixture: ComponentFixture<CriteraFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteraFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteraFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
