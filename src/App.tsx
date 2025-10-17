import React from "react";
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

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
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
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 20,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>My Todo App</h1>
      <p style={{ color: "#666", marginBottom: 20 }}>
        React + TypeScript + LocalStorage の練習アプリ
      </p>

      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

      {/* ✅ カウンターを下に追加 */}
      <Counter />

      <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
        <h1>🗒 買い物メモアプリ</h1>
        <MemoInput onAdd={addMemo} />
        <MemoList memos={memos} onDelete={deleteMemo} />
      </div>
    </div>
  );
};
export default App;
