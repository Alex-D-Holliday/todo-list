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