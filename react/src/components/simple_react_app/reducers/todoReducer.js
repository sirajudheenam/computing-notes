import { legacy_createStore as createStore } from "redux";
// const { createStore } = Redux;

// create initial STATE for the STORE
const initialState = {
  todos: [],
  posts: [],
  tasks: [{ id: 1, name: "Sleep early" }],
};

// create a REDUCER to pass it on to createStore as param.
const todoReducer = (state = initialState, action) => {
  // make changes to the STORE based on ACTION type
  if (action.type === "ADD_TODO") {
    return {
      /*
      ...state, will keep the existing state of store
      including posts.
      non-destructive way to add new items
      to exiting STATE of the STORE.
      ...state.todos - existing todos
      action.payload will update the existing todos.
      */
      ...state,
      todos: [...state.todos, action.payload],
    };
  } else if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
  } else {
    return {
      ...state,
    };
  }
};

const splitArray = (tasks) => {
  tasks.forEach((task) => {
    console.log(`id: ${task.id}, name: ${task.name}`);
    return [task.name];
  });
};
// create a STORE with REDUCER
const store = createStore(todoReducer);

// SUBSCRIBE to the STATE (of the STORE) changes.
store.subscribe(() => {
  console.log("State updated");
  console.log(store);
  console.log(store.getState());
});

// create an ACTION
const addTodoAction = { type: "ADD_TODO", payload: "learn redux" };
const addPostAction = { type: "ADD_POST", payload: "Blog on Biology" };

// DISPATCH the ACTION to make changes to the STORE
store.dispatch(addTodoAction);
store.dispatch(addPostAction);
// Pass ACTION object directly to DISPATCH
store.dispatch({ type: "ADD_TODO", payload: "learn react" });
store.dispatch({ type: "ADD_POST", payload: "Do some exercise" });

// Add multiple action.payload via loop.
const tasks = [
  { id: 2, name: "Wake up early" },
  { id: 23, name: "Clean Up" },
];
tasks.forEach((task) => {
  let addTaskAction = { type: "ADD_TASK", payload: task };
  console.log(`${task.name} is being updated`);
  store.dispatch(addTaskAction);
});

export default todoReducer;
