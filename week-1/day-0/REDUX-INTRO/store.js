import {createStore} from "redux"

const ADD_COUNTER = "ADD_COUNTER"
const REDUCE_COUNTER = "REDUCE_COUNTER"
const ADD_TODOS = "ADD_TODOS"
const TOGGLE_TODOS = "TOGGLE_TODOS"
const DELETE_TODOS = "DELETE_TODOS"

const reducerFn = (state,{type,payload}) => {
    switch (type) {
        case ADD_COUNTER: return { ...state, counter: state.counter + payload };
        case REDUCE_COUNTER: return { ...state, counter: state.counter - payload };
        case ADD_TODOS: return { ...state, todos: [...state.todos, payload] }
        case TOGGLE_TODOS:
            state.todos.map(el => (el.title === payload ? el.status = !el.status : el))
            return { ...state, todos: state.todos };
        case DELETE_TODOS:
            for (let i = 0; i < state.todos.length; i++){
                if (state.todos[i].title === payload) {
                    state.todos.splice(i, 1);
                     
                }
            }
            
            return { ...state, todos: [...state.todos] };
        default: return state;
    }
}

// class Store{
//     constructor(initState,reducerFn) {
//         this.state = initState,
//         this.reducerFn = reducerFn
//     }

//     getState() {
//         return this.state;
//     }
//     dispatch(action) {
//         this.state = this.reducerFn(this.state,action)
//     }
// }
const initState = {
    counter: 0,
    todos:[]
}

const addTodos = (data) => {
    return { type: ADD_TODOS, payload: data };
}

const toggleTodos = (data) => {
  return { type: TOGGLE_TODOS, payload: data };
};

const deleteTodos = (data) => {
  return { type: DELETE_TODOS, payload: data };
};

const store = createStore(reducerFn,initState);

store.dispatch({ type: ADD_COUNTER, payload: 1 })
store.dispatch({ type: ADD_COUNTER, payload: 1 })
store.dispatch({type:ADD_COUNTER,payload:5})

console.log("add", store.getState());


store.dispatch({ type: REDUCE_COUNTER, payload: 1 })

store.dispatch(
    addTodos({
        id: 1,
        status: false,
        title: "BUY MASK"
    })
)
store.dispatch(
    addTodos({
        id: 2,
        status: false,
        title: "BUY TEA"
    })
)
store.dispatch(
    addTodos({
        id: 3,
        status: false,
        title: "BUY CAR"
    })
)

store.dispatch(toggleTodos("BUY MASK"))

console.log("todos", store.getState());
store.dispatch(deleteTodos("BUY MASK"));

console.log("delete", store.getState());





