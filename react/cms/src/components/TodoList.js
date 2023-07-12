import React from 'react';
import '../stylesheets/style.css';
// useMemo(calculateValue, dependencies)

function filterTodos(todos, tab) {
  switch (tab) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}


export function TodoList({ todos, tab }) {

  const visibleTodos = React.useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );

  return (
    <ul>
      {
        visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type='checkBox' onClick={() => todo.completed = !todo.completed}></input>
            <button onClick={() => todos.splice(todos.indexOf(todo), 1)}>Delete</button>
            <button onClick={() => todos.push({
              id: todos.length + 1,
              title: 'New Todo',
              completed: false,
            })}>Add Todo</button>
          </li>
        ))}
    </ul>
  );
}
