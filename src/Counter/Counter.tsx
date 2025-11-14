import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0); // 初期値 0

  const handleIncrement = () => setCount(prev => prev + 1); // +1
  const handleDecrement = () => setCount(prev => prev - 1); // -1
  const handleReset = () => setCount(0); // リセット

  return (
    <div className="counter-wrap">
      <p>カウンター: {count}</p>

      <div className="count-warp">
        <button className="count count-inc" onClick={handleIncrement}>
          +1
        </button>
      </div>

      <div className="count-warp">
        <button className="count count-dec" onClick={handleDecrement}>
          -1
        </button>
      </div>

      <div className="count-warp">
        <button className="count count-reset" onClick={handleReset}>
          リセット
        </button>
      </div>
    </div>
  );
};

export default Counter;
