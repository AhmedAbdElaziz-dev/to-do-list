import { ToDoListItem } from './to-do-list-item.model';

export interface ToDoList {
  id: string;
  name: string;
  description: string;
  itemslist?:Array<ToDoListItem>
}
