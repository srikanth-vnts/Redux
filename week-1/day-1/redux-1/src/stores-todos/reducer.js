import {
    ADD_COUNTER,
    REDUCE_COUNTER,
    MULTIPLY_COUNTER,
    DIVIDE_COUNTER,
    ADD_TODOS,
    TOGGLE_TODOS,
    DELETE_TODOS,
    EDIT_TODOS,
} from "./actionTypes.js";

export const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return { ...state, counter: Number(state.counter) +   Number(payload) };
    
    case REDUCE_COUNTER:
      return { ...state, counter: Number(state.counter) - Number(payload) };
    
    case MULTIPLY_COUNTER:
      return { ...state, counter: state.counter * payload };
    
    case DIVIDE_COUNTER:
      return { ...state, counter: state.counter / payload };
    
    case ADD_TODOS:
      return { ...state, todos: [...state.todos, payload] };
    
    case TOGGLE_TODOS:
      state.todos.map((el) =>
        el.title === payload ? (el.status = !el.status) : el
      );
      return { ...state, todos:[...state.todos] };
    
    case EDIT_TODOS:
      state.todos.map((el) =>
        el.title === payload.title ? (el.title = payload.newTitle) : el
      );
      return { ...state, todos: state.todos };
    
    case DELETE_TODOS:
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].title === payload) {
          state.todos.splice(i, 1);
        }
      }

      return { ...state, todos: [...state.todos] };
    default:
      return state;
  }
};
