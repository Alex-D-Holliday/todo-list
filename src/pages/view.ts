import Storage from "../core/services/storage";
import { RenderPage } from "../core/templates/renderPage";
import { Constants } from "../core/constants";
import Controller from "./controller";

export default class View {
  private storage: Storage;
  private input: HTMLInputElement;
  private static container = document.querySelector('.todo-list') as HTMLInputElement;

  constructor() {
    this.storage = new Storage();
    this.input = document.getElementById('add-todo') as HTMLInputElement;
  }

  displayList() {
    const data = this.storage.getItems();
    View.container.innerHTML = RenderPage.renderItemList(data);
  }

  bindEventListeners = (controller: any) => {
    document.getElementById('add-todo')!.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.keyCode === Constants.ENTER) {
        const taskInput = e.target as HTMLInputElement;

        if (controller.addTodo(taskInput.value)) {
          taskInput.value = '';
        }
      }
    })

  }
}