import Page from "../../../core/templates/filter";
import { Constants } from "../../../core/constants";

export default class CompletedFilter extends Page {
  constructor() {
    super();
  }

  render() {
    /*const list = this.createTodoList(Constants.COMPLETED);
    this.container.append(list);*/
    return this.container;
  }
}