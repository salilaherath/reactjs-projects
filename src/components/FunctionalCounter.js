import { useState } from 'react';

function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Functional Counter</h1>
      {/* <div>Counter value: {counter}</div> */}
      <div>
        <button onClick={increment}>Count = {counter}</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default FunctionalCounter;

/*
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times!</button>;
}

export default function FunctionalCounter() {
  return (
    <div>
      <h1>Another way of setting counter</h1>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}
*/
