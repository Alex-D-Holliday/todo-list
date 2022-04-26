import { TodoItem } from "./todoItem";

export class RenderPage {
  static renderItemList(items: TodoItem[]) {
    return items.reduce((acc, item) => acc + `
        <li data-id="${ item.id }"${ item.completed ? ' class="completed"' : '' }>
        		<input class="toggle" type="checkbox" ${ item.completed ? 'checked' : '' }>
        		<span>${ item.name }</span>
        		<button class="delete-btn" data-id="${ item.id }"></button>
        </li>`, '');
  }
}