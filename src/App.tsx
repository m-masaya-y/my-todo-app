import React from "react";
import "./App.css"; 
import { Todo } from "./types/Todo";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Counter from "./Counter/Counter";
import { Memo } from "./types/Memo";
import MemoInput from "./components/MemoInput";
import MemoList from "./components/MemoList";

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("my-todos", []);

  const addTodo = (text: string, deadline: string, priority?: 1 | 2 | 3) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false, deadline, priority };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const [memos, setMemos] = useLocalStorage<Memo[]>("my-memos", []);

  const addMemo = (text: string) => {
    const newMemo: Memo = { id: Date.now(), text };
    setMemos([...memos, newMemo]);
  };

  const deleteMemo = (id: number) => {
    setMemos(memos.filter((m) => m.id !== id));
  };

  return (
    <div className="app-wrap">
      <h1 className="app-title">My Todo App</h1>
      <p className="app-text">
        React + TypeScript + LocalStorage の練習アプリ
      </p>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

      <Counter />

      <div className="counter-title">
        <h1>🗒 買い物メモアプリ</h1>
        <MemoInput onAdd={addMemo} />
        <MemoList memos={memos} onDelete={deleteMemo} />
      </div>

      <div className="app-back-btn">
        <a href="https://minahada.com/wordpress/" target="_blank" rel="noopener noreferrer">
          トップに戻る
       </a>
      </div>
    </div>
  );
};
export default App;
