//Counter入れる場所
import React,{ useState } from "react"; //リアクト使うためのおまじない
const Counter: React.FC = () => { //React Function Component（関数コンポーネント） の略で、TypeScriptに「これはReactコンポーネントです」と教えるための型
const [count, setCount] = useState(0); //Countのセッティングと初期値 0

  const handleClick = () => { //+1ボタンの設定
    setCount((prev) => prev + 1);
  };

  const handleClick_2 = () => { //-1ボタンの設定
    setCount((prev) => prev -1);
  };

  return (
    <div>
        <p>カウンター: {count}</p>
        <div style={{ marginBottom: 16 }}>
            <button onClick={handleClick} style={{ padding: "8px 12px" }}>
                +1
            </button>
        </div>
        <div style={{ marginBottom: 16 }}>
            <button onClick={handleClick_2} style={{ padding: "8px 12px" }}>
                -1
            </button>
        </div>
    </div>
  );
};
export default Counter;