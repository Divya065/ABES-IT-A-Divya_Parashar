import React, { useState } from 'react'

export default function Count1() {
  // const [count, setCount] = useState(0);

  // function change() {
  //     setCount(count + 1);
  // }
  // function changed() {
  //     setCount(count - 1);
  // }
  const [backgroundColor, setBackgroundColor] = useState('blue');
  
  return (
    <div>
      {/* <button onClick={changed}>-</button>
            <button onClick={change}>+</button>
            <p>Count: {count}</p> */}
      <button
        onClick={() => setBackgroundColor('green')} // change color on click
        style={{
          backgroundColor: backgroundColor, // use the current color
          color: ['blue', 'white'].includes(backgroundColor) ? 'black' : 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Click
      </button>

    </div>
  )
}
