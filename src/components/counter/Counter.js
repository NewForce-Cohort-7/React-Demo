import { useState } from "react"
import "./Counter.css"
export const Counter = () => {

    let [counter, setCounter] = useState(0)






    return (
        <div className="counterBox">
        <h1>Click the Button</h1>
        <button
        onClick={()=> {
            let currentNumber = counter + 1
            setCounter(currentNumber)
        }}
        >add to the counter</button>

        <p>{counter}</p>
        </div>
    )
}