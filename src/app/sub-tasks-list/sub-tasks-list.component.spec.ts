import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTasksListComponent } from './sub-tasks-list.component';

describe('SubTasksListComponent', () => {
  let component: SubTasksListComponent;
  let fixture: ComponentFixture<SubTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTasksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
