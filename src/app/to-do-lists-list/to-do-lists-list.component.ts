import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../models/to-do-list.model';
import { ToDoListServcie } from '../shared/services/to-do-list.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-lists-list.component.html',
  styleUrls: ['./to-do-lists-list.component.scss'],
})
export class ToDoListsListComponent implements OnInit {
  toDoLists: Array<ToDoList> = [];
  public name: string;
  public discription: string;
  constructor(private toDoListServiec: ToDoListServcie) {}

  ngOnInit(): void {
    this.toDoLists = this.toDoListServiec.getAllLists();
  }

  addList() {
    this.toDoListServiec.addList(this.name, this.discription);
    this.name = '';
    this.discription = '';
  }

  deleteList(id) {
    this.toDoLists = this.toDoListServiec.deleteList(id);
  }
}
