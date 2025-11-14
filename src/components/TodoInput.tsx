import React, { useState } from "react";
import { Todo } from "../types/Todo";

type Props = {
  onAdd: (text: string, deadline: string, priority?: 1 | 2 | 3) => void;
};

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState<1 | 2 | 3 | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || !deadline) return;
    onAdd(trimmed, deadline, priority === "" ? undefined : priority);
    setText("");
    setDeadline("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <h3>タスク</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスク"
      />
      <h3>締切日</h3>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      /><h3>優先度</h3>
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value) as 1 | 2 | 3)}
      >
        <option value="">自動</option>
        <option value={1}>高</option>
        <option value={2}>中</option>
        <option value={3}>低</option>
      </select>
      <button type="submit">追加</button>
    </form>
  );
};

export default TodoInput;
