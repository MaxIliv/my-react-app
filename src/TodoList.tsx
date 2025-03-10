import { observer } from "mobx-react-lite"
import { Todo, TodoList, ITodo } from "./mobx/todoStore";

type Props = {
  todoList: TodoList,
}
type TodoViewProps = {
  todo: ITodo,
}

const TodoListView = observer<Props>(({ todoList }) => (
  <div>
    <ul>
      {todoList.todos.map(todo => (
        <TodoView todo={todo} key={todo.id} />
      ))}
    </ul>
    Tasks left: {todoList.unfinishedTodoCount}
  </div>
))

const TodoView = observer<TodoViewProps>(({ todo }) => (
  <li>
    <input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
    {todo.title}
  </li>
))

const store = new TodoList([new Todo("Get Coffee"), new Todo("Write simpler code")])


export default function TodoListComponent() {
  return (
    <>
      <h4>Todo List</h4>
      <TodoListView todoList={store} />
    </>
  )
}