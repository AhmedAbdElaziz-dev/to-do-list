import { Injectable } from '@angular/core';
import { ToDoListItem } from '../../models/to-do-list-item.model';
import { ToDoList } from '../../models/to-do-list.model';

export class ToDoListServcie {
  toDoLists: Array<ToDoList> = [];
  toDoListItems: Array<ToDoListItem> = [];
  constructor() {}

  addList(name, description) {
    const toDOlist = {
      name,
      description,
      id: '_' + Math.random().toString(36).substr(2, 9),
    };
    this.toDoLists.push(toDOlist);
  }

  deleteList(id) {
   return this.toDoLists = this.toDoLists.filter((l) => l.id !== id);
  }
  getAllLists() {
    return this.toDoLists;
  }
  getListById(id) {
    const list: ToDoList = this.toDoLists.find((list) => list.id === id);
    return list;
  }
}
