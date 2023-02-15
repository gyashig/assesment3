import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let color = 'green';
  if (count >= 5 && count <= 9) {
    color = 'blue';
  } else if (count === 10) {
    color = 'red';
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;