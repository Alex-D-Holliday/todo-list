import Storage from "../core/services/storage";
import Controller from "./controller";

export default class App {
  private storage: Storage;
  private taskController: Controller;


  constructor() {
    this.storage = new Storage();
    this.taskController = new Controller();
  }

  run() {
    this.storage.initialStore();
    this.taskController.init();
  }
}