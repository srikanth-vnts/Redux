import { useState } from 'react'
import { store } from "../../stores-todos/store"
import { addCounter, divideCounter, multiplyCounter,reduceCounter } from "../../stores-todos/action.js";

export function Calculator() {
    const [input, setInput] = useState(0);
    const [force, setForce] = useState(1);
    const { getState, dispatch } = store;

    const handleAdd = () => {
        console.log(getState().counter);
        dispatch(addCounter(input))
        setForce(prev=> prev+1)
        
    }
     const handleReduce = () => {
         console.log(getState().counter);
        dispatch(reduceCounter(input))
        setForce(prev=> prev+1)
    }
    const handleAdd1 = () => {
        console.log(getState().counter);
        dispatch(addCounter(1))
        setForce(prev=> prev+1)
    }
     const handleReduce1 = () => {
         console.log(getState().counter);
        dispatch(reduceCounter(1))
        setForce(prev=> prev+1)
    }
     const handleMultiply = () => {
         console.log(getState().counter);
        dispatch(multiplyCounter(input))
        setForce(prev=> prev+1)
    }
     const handleDivide = () => {
         console.log(getState().counter);
         dispatch(divideCounter(input))
         setForce(prev=> prev+1)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div><h4>{getState().counter}</h4></div>
            <div>
                <button onClick={handleAdd1}>ADD 1</button>
                <button onClick={handleReduce1}>REDUCE 1</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div><input onChange={(e)=>{setInput(e.target.value)}} type="number" placeholder="number"/></div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ display: 'flex' }}>
                        <button onClick={handleAdd}>+</button>
                        <button onClick={handleReduce}>-</button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <button onClick={handleMultiply}>x</button>
                        <button onClick={handleDivide}>/</button>
                    </div>
                </div>
            </div>

        </div>
    )
}