import Storage from "../services/store";
import { Todo, TodoItem } from "./todoItem";

export default abstract class Page {
  protected container;
  protected storage: Storage;

  protected constructor() {
    this.container = document.querySelector('.todo-list')!;
    this.storage = new Storage();
  }

  protected createTodoList(filter: string) {
    const data = this.storage.getItems();

    switch (filter) {
      case 'all':
        return data;
      case 'active':
        return data.filter((todo: TodoItem) => !todo.completed);
      case 'completed':
        return data.filter((todo: TodoItem) => todo.completed);
    }
  }

  render() {
    return this.container;
  }
}