import React from "react";
import { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "8px", borderBottom: "1px solid #eee"
    }}>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} style={{ background: "transparent", border: "none", color: "#c00", cursor: "pointer" }}>
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
