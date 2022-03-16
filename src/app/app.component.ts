import { Component } from '@angular/core';
import { todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  localItem:any;
  todo_t:string = "";
  todo_d:string = "";
  todos:todo[] = []
  constructor(){
    this.localItem = localStorage.getItem("todos")
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos =  JSON.parse(this.localItem)
    }
  }
  addTodo(){
  if(this.todo_t != ""){
    const newTodo:todo = {
    title:this.todo_t,
    description:this.todo_d,
    done:false
  }
    this.todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.todo_t = "";
    this.todo_d = "";
  }
  else{
    console.log("PLease enter some data.")
  }
  }
  deleteTodo(todo:todo){
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  markasdone(todo:todo){
    todo.done = !todo.done
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  removeAll(){
    this.todos = [];
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
