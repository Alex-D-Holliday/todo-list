import Storage from "../services/store";
import { TodoItem } from "../templates/todoItem";
import RenderView from "../../pages/app/renderPage";

export default class Controller {
  private storage: Storage;
  private taskView: RenderView;

  constructor() {
    this.storage = new Storage();
    this.taskView = new RenderView();
  }

  addTodo(text: string) {
    const data: TodoItem[] = [];
    data.push(new TodoItem(text));

    this.storage.setItem(data);
  }

  deleteTodo() {

  }

  editTodo() {

  }

  init() {
    this.taskView.bindEventListeners(this);
  }
}