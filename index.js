
import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={handleIncrement}>Increment count</button>
    </div>
  );
}

function ChildComponent(props) {
  return <p>Count: {props.count}</p>;
}
