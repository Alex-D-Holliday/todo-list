import Page from "../../core/templates/filter";
import { Constants } from "../../core/constants";
import AllFilter from "../filters/all";
import ActiveFilter from "../filters/active";
import CompletedFilter from "../filters/completed";
import Storage from "../../core/services/store";
import { RenderList } from "../../core/templates/todoItem";
import Controller from "../../core/controller";

export default class RenderView {
  private static defaultPageId: string = 'current-page';
  private storage: Storage;
  private static container = document.querySelector('.todo-list')!;
  private input: Element;

  constructor() {
    this.storage = new Storage();
    this.input = document.querySelector('.add-todo')!;
  }

  /*static renderPage(filter: string) {
    const currentPageHtml = document.querySelector(`#${ RenderView.defaultPageId }`);
    if (currentPageHtml) {
      currentPageHtml.remove();
    }
    let page: Page | null = null;

    if (filter === Constants.ALL) {
      page = new AllFilter();
    } else if (filter === Constants.ACTIVE) {
      page = new ActiveFilter();
    } else if (filter === Constants.COMPLETED) {
      page = new CompletedFilter();
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = RenderView.defaultPageId;
      //container.append(pageHTML);
    }
  }

  enableRoutChange() {
    const hash = window.location.hash.slice(2);
    window.addEventListener('hashchange', () => {
      RenderView.renderPage(hash);
    })

    document.querySelector('.selected')!.className = '';
    document.querySelector(`.filters [href="#/${hash}"]`)!.className = 'selected';
  }*/

  displayList() {
    const data = this.storage.getItems();
    RenderView.container.innerHTML = RenderList.render(data);
  }

  bindEventListeners(controller: any): void {
    this.input.addEventListener('keypress', (e: any): void => {
      if (e.key === Constants.ENTER) {
        const taskInput = e.target as HTMLInputElement;

        if (controller.addTask(taskInput.value)) {
          taskInput.value = '';
        }
      }
    });
  }
}