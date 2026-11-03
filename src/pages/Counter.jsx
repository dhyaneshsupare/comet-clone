import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Hello the count is {count}</h1>

        <button onClick={() => {setCount(count + 1)}}> Add </button>

        {
            count == 0 ? <h1>Count is 0</h1>:
            count == 1 ? <h1>Count is 1</h1>:
            count == 2 ? <h1>Count is 2</h1>:
            count == 3 ? <h1>Count is 3</h1>:
            count == 4 ? <h1>Count is 4</h1>:
            count == 5 ? <h1>Count is 5</h1>:
            count == 6 ? <h1>Count is 6</h1>:
            <h1>Null</h1>
        }
    </div>
  )
}

export default Counter