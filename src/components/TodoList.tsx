import TodoItem from "./TodoItem.tsx";
import type { Todo } from "../App";

export default function TodoList({
  todos,
  onToggle,
  onRemove,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
