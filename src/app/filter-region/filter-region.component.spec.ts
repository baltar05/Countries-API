import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRegionComponent } from './filter-region.component';

describe('FilterRegionComponent', () => {
  let component: FilterRegionComponent;
  let fixture: ComponentFixture<FilterRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
