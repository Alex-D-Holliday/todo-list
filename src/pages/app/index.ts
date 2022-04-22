import Storage from "../../core/services/store";
import { Constants } from "../../core/constants";
import AllFilter from "../filters/all";
import RenderView from "./renderPage";
import Controller from "../../core/controller";

export default class App {
  private storage: Storage;
  private initialPage: AllFilter;
  private view: RenderView;
  private controller: Controller;

  constructor() {
    this.view = new RenderView();
    this.initialPage = new AllFilter();
    this.storage = new Storage();
    this.controller = new Controller();
  }


  run() {
    this.storage.initialStore();
    //this.view.enableRoutChange();
    this.controller.init();

    //App.container.append(/*this.todoList.render()*/);
    //RenderView.renderPage(Constants.ALL);
    //this.view.displayList();
  }
}