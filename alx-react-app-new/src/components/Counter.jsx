import React, {useState} from 'react'

function Counter () {
    const [count, setCount] = useState( 0 );
    function handleIncrease () {
        setCount(count => count + 1)
    };
    function handleDecrease () {
        setCount(count => count - 1)
    };
    function handleReset () {
        setCount(count => count = 0)
    };
    
  return (
      <div>
          <p>{count}</p>
          <button onClick={handleIncrease}>Increment</button>
          <button onClick={handleDecrease}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;