import React, { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力"
        style={{ padding: "8px 10px", width: "70%", marginRight: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        追加
      </button>
    </form>
  );
};

export default TodoInput;
