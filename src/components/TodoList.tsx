import React from "react";
import { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

// 優先度判定 + 背景色クラス
const getPriorityClass = (todo: Todo) => {
  if (todo.priority) {
    switch (todo.priority) {
      case 1: return "high";
      case 2: return "medium";
      case 3: return "low";
    }
  }
  // 自動判定
  const today = new Date();
  const target = new Date(todo.deadline);
  const diff = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diff <= 7) return "high";
  if (diff <= 14) return "medium";
  return "low";
};

// 期限までの日数を計算
const getDaysLeft = (deadline: string) => {
  const today = new Date();
  const target = new Date(deadline);
  return Math.max(Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)), 0);
};

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => {
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );

  return (
    <ul className="todo-list">
      {sortedTodos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""} ${getPriorityClass(todo)}`}
        >
          <div className="todo-left" onClick={() => onToggle(todo.id)}>
            <span className="todo-text">{todo.text}</span>
            <span className="todo-deadline">
              {todo.deadline} ({getDaysLeft(todo.deadline)}日後)
            </span>
            {todo.priority && (
              <span className="todo-priority-label">
                優先度: {["高", "中", "低"][todo.priority - 1]}
              </span>
            )}
          </div>
          <button className="todo-delete" onClick={() => onDelete(todo.id)}>
            削除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
