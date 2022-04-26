import { TodoItem } from "../core/templates/todoItem";
import Storage from "../core/services/storage";
import View from "./view";

export default class Controller {
  private storage: Storage;
  private view: View;

  constructor() {
    this.storage = new Storage();
    this.view = new View();
  }

  addTodo(text: string): boolean {
    const todos: TodoItem[] = [new TodoItem(text)];
    this.storage.setItem(todos);
    this.view.displayList();
    return true;
  }

  init() {
    this.view.bindEventListeners(this);
    this.view.displayList();
  }
}