import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  todoItem: string = '';
  allTodoItems: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getTodo().subscribe((todo) => {
      this.allTodoItems = todo;
    });
  }

  addData() {
    if (this.todoItem === '') return;
    this.crudService.addTodo(this.todoItem, false).subscribe((data) => {
      console.log('Item Added', data);
      this.allTodoItems.push(data);
    });
    this.todoItem = '';
  }

  handleTodoChange(item: any, e: any) {
    this.crudService
      .updateTodo(item.id, item.todo, e.target.checked)
      .subscribe((data: any) => {
        console.log('Item Updated', data);
        item.done = data.done;
      });
  }

  deleteItem(item: any) {
    this.crudService.deleteTodo(item.id).subscribe();
    this.allTodoItems = this.allTodoItems.filter(
      (el: any) => el.id !== item.id
    );
  }
}
