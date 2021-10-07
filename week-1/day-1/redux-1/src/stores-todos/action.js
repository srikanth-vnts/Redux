import {
    ADD_TODOS,
    TOGGLE_TODOS,
    DELETE_TODOS,
    EDIT_TODOS,
    ADD_COUNTER,
    REDUCE_COUNTER,
    MULTIPLY_COUNTER,
    DIVIDE_COUNTER
} from "./actionTypes.js"


const addCounter = (data) => {
  return { type: ADD_COUNTER, payload: data };
};

const reduceCounter = (data) => {
  return { type: REDUCE_COUNTER, payload: data };
};

const multiplyCounter = (data) => {
  return { type: MULTIPLY_COUNTER, payload: data };
};

const addTodos = (data) => {
  return { type: ADD_TODOS, payload: data };
};
const divideCounter = (data) => {
  return { type: DIVIDE_COUNTER, payload: data };
};

const toggleTodos = (data) => {
  return { type: TOGGLE_TODOS, payload: data };
};

const editTodos = (data) => {
  return { type: EDIT_TODOS, payload: data };
};

const deleteTodos = (data) => {
  return { type: DELETE_TODOS, payload: data };
};

export {addTodos, deleteTodos,toggleTodos,editTodos,addCounter,reduceCounter,multiplyCounter,divideCounter}


