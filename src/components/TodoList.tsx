import React from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <p>タスクはまだありません。</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
