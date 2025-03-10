import { makeObservable, observable, action, computed } from 'mobx';
export interface ITodo {
  id: number;
  title: string;
  finished: boolean
  toggle: () => void;
}

export class Todo implements ITodo {
  id = Math.random()
  title = ''
  finished = false

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    })
    this.title = title
  }

  toggle() {
    this.finished = !this.finished
  }
}


export class TodoList {
  todos: ITodo[] = []

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }
  constructor(todos: ITodo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    })
    this.todos = todos
  }
}

