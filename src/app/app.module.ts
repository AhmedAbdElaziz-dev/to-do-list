import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListsListComponent } from './to-do-lists-list/to-do-lists-list.component';
import { ToDoListServcie } from './shared/services/to-do-list.service';

const appRouter: Routes = [
  { path: '', component: ToDoListsListComponent },
  { path: 'list/:id', component: ToDoListComponent },
];
@NgModule({
  declarations: [AppComponent, ToDoListComponent, ToDoListsListComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRouter)],
  providers: [ToDoListServcie],
  bootstrap: [AppComponent],
})
export class AppModule {}
