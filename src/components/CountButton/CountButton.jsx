import { useState } from "react"

export const CountButton = () => {


    const [count, setCount] = useState(0)

    return (
        <>
            <h3>Count: {count}</h3>
            <button style={{marginBottom: "48px"}} onClick={() => setCount(prev => prev+1)}>One more</button>
        </>
        )
}