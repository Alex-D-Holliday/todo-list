export class TodoItem {
  public id: number
  public name: string
  public completed: boolean

  constructor(text: string) {
    this.id = Date.now();
    this.name = text;
    this.completed = false;
  }

}

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export class RenderList {
  static render(items: TodoItem[]) {
    return items.reduce((acc, item) => acc + `
        <li data-id="${ item.id }"${ item.completed ? ' class="completed"' : '' }>
        		<input class="toggle" type="checkbox" ${ item.completed ? 'checked' : '' }>
        		<span>${ item.name }</span>
        		<button class="delete-btn" data-id="${ item.id }"></button>
        </li>`, '');
  }
}