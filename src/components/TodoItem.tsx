import type { Todo } from "../App";

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      {todo.text}
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
}
