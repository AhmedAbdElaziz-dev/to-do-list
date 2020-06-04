import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../models/to-do-list.model';
import { ToDoListItem } from '../models/to-do-list-item.model';
import { ToDoListServcie } from '../shared/services/to-do-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  toDoList: Array<ToDoListItem> = [];
  name: string;
  description: string;
  date: Date;
  listId: string;
  constructor(
    private toDoListServcie: ToDoListServcie,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listId = this.route.snapshot.params['id'];
  }
  addItem() {
    const item = {
      name: this.name,
      description: this.description,
      date: this.date,
      isDone:false,
      id: '_' + Math.random().toString(36).substr(2, 9),
    };
    this.toDoList.push(item);
    this.name = '';
    this.description = '';
    this.date = null;

  }
  deleteItem(id) {
    console.log(id);
    this.toDoList = this.toDoList.filter((item) => item.id !== id);
    console.log(this.toDoList.filter((item) => item.id !== id));
  }
  isTaskDone(item){
    item.isDone=!item.isDone
  }
}
