import React, { useState } from "react";
import { Memo } from "../types/Memo";

type Props = {
  memos: Memo[];
  onDelete: (id: number) => void;
};

const MemoList: React.FC<Props> = ({ memos, onDelete }) => {
  // 🧮 複数メモのカウントを個別に保持
  const [counts, setCounts] = useState<{ [key: number]: number }>({});

  const handleIncrement = (id: number) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: number) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {memos.map((memo) => (
        <li
          key={memo.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px",
            marginBottom: "8px",
            background: "#f8f8f8",
            borderRadius: "4px",
          }}
        >
          {/* 左側：メモ内容 */}
          <span>{memo.text}</span>

          {/* 右側：削除ボタン + カウンター */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button onClick={() => handleIncrement(memo.id)}>+1</button>
            <button onClick={() => handleDecrement(memo.id)}>-1</button>
            <span>個数: {counts[memo.id] || 0}</span>
            <button onClick={() => onDelete(memo.id)}>削除</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;
