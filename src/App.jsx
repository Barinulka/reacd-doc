import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // useState - хук состояния
  const [count, setCount] = useState(0);

  const handleClickBtn = () => {
    setCount(count + 1);
  };

  // useEffect - хук эффекта
  // Обновим заголовок после загрузки DOM
  useEffect(() => {
    document.title = `Кнопка нажата ${count} раз`;
    console.log("update");
  },[count]);

  return (
    <div className="app">
      <p>Вы кликнули {count} раз</p>
      <button onClick={handleClickBtn}>Нажми сюда</button>
    </div>
  );
}

export default App;
