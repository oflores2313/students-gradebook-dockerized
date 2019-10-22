import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDataTableComponent } from './students-data-table.component';

describe('StudentsDataTableComponent', () => {
  let component: StudentsDataTableComponent;
  let fixture: ComponentFixture<StudentsDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
