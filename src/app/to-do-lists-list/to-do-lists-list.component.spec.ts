import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListsListComponent } from './to-do-lists-list.component';

describe('ToDoListsListComponent', () => {
  let component: ToDoListsListComponent;
  let fixture: ComponentFixture<ToDoListsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
