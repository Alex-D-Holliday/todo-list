import Page from "../../../core/templates/filter";
import { Constants } from "../../../core/constants";

export default class ActiveFilter extends Page {
  constructor() {
    super();
  }

  render() {
    /*const list = this.createTodoList(Constants.ACTIVE);
    this.container.append(list);*/
    return this.container;
  }
}