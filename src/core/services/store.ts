import { Constants } from "../constants";
import { TodoItem } from "../templates/todoItem";

export default class Storage {
  key: string = Constants.STORAGE_ID;

  initialStore() {
    if (!localStorage[this.key]) {
      localStorage[this.key] = JSON.stringify([]);
    }
  }

  getItems() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  setItem(todos: TodoItem[]) {
    localStorage.setItem(this.key, JSON.stringify(todos));
  }
}