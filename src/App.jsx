import { useState } from "react";
import "./App.css";

function App() {
  // useState - хук состояния
  const [count, setCount] = useState(0);

  const handleClickBtn = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <p>Вы кликнули {count} раз</p>
      <button onClick={handleClickBtn}>Нажми сюда</button>
    </div>
  );
}

export default App;
