import React, { useState } from 'react'

export default function Count1() {
    const [count, setCount] = useState(0);

    function change() {
        setCount(count + 1);
    }
    function changed() {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={changed}>-</button>
            <button onClick={change}>+</button>
            <p>Count: {count}</p>
        </div>
    )
}
