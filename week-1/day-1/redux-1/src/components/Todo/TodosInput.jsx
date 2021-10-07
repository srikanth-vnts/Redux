import { store } from "../../stores-todos/store"
import {useState} from "react"
import { addTodos, deleteTodos, toggleTodos, editTodos } from "../../stores-todos/action.js";
import { useSelector, useDispatch } from "react-redux";

export function TodosInput() {
    const state = useSelector(state => state.todos)
    const [val, setVal] = useState("")
    const [eVal, setEVal] = useState("")
    const [force, setForce] = useState(1);
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setVal(e.target.value)
      // console  console.log(val)
        return e.target.value;
    }

    const handleSubmit = () => {
        console.log(state);
        dispatch(
        addTodos({
            status: false,
            title: val,
        })
    );
    }

    const handleEditor = (e) => {
          setEVal(e.target.value)
          return e.target.value;
    }

    const handleESubmit = (el) => {
        
        dispatch(
        editTodos({
            title: el.title,
            newTitle:eVal
        })
        );
        setForce(prev=> prev+1)
        console.log(el,val);
    }

    const handleToggle = (el) => {
        dispatch(toggleTodos(el.title))
    //    setForce(prev=> prev+1)
        console.log(el)
    }

    const handleDelete = (el) => {
        dispatch(deleteTodos(el.title))
        setForce(prev=> prev+1)
        console.log(el)
    }


    
    return (
        <>
            <div>
            <input onChange={(e) => { handleInput(e) }} type="text" placeholder="todos" name="todos" />
            <input onClick={handleSubmit} type="submit" value="Submit" name="submit" />
            </div>
            <div style={{ display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
                {state.map((el) => {
                    return (
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <p onClick={()=>handleToggle(el)}>{el.title}</p>
                            <p style={{ marginLeft: "10px" }}>{el.status ? "completed" : "pending"}</p>
                            <input style={{ marginLeft: "10px" }} onChange={(e) => { handleEditor(e) }} type="text" placeholder="todos" name="todos" />
                            <input onClick={() => { handleESubmit(el) }} type="submit" value="Submit" name="submit" />
                            <input onClick={()=>{handleDelete(el)}} type="submit" value="DELETE" name="DELETE" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

