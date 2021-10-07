import { createStore } from "redux";
import { addTodos, deleteTodos, toggleTodos } from "./action.js"
import { reducerFn } from "./reducer.js"



const initState = {
  counter: 0,
    todos: [],
};

export const store = createStore(reducerFn, initState);


// store.dispatch(
//   addTodos({
//     id: 1,
//     status: false,
//     title: "BUY MASK",
//   })
// );
// store.dispatch(
//   addTodos({
//     id: 2,
//     status: false,
//     title: "BUY TEA",
//   })
// );

// store.dispatch(
//   addTodos({
//     id: 3,
//     status: false,
//     title: "BUY CAR",
//   })
// );
// console.log("todos", store.getState());





// store.dispatch(toggleTodos("BUY MASK"));


//  store.dispatch(deleteTodos("BUY MASK"));

// console.log("delete", store.getState());
