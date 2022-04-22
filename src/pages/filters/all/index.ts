import Page from "../../../core/templates/filter";
import { Constants } from "../../../core/constants";

export default class AllFilter extends Page {
  constructor() {
    super();
  }

  render() {
    /*const list = this.createTodoList(Constants.ALL);
    this.container.append(list);*/
    return this.container;
  }
}