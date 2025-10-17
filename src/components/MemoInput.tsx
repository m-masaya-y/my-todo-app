import React, { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

const MemoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="メモを入力"
        style={{ padding: "8px", marginRight: 8, width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        追加
      </button>
    </form>
  );
};

export default MemoInput;
