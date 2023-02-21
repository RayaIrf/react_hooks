import React, { useEffect, useState } from "react";

function HookCounterOne() {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne