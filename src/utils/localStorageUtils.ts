const TODOS_KEY = 'todos';

export const loadTodos = () => {
  const todos = localStorage.getItem(TODOS_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodo = (todo: any) => {
  const todos = loadTodos();
  const index = todos.findIndex((t: any) => t.id === todo.id);
  if (index === -1) {
    todos.push(todo);
  } else {
    todos[index] = todo;
  }
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const loadTodo = (id: string) => {
  const todos = loadTodos();
  return todos.find((todo: any) => todo.id === id);
};

export const deleteTodo = (id: string) => {
  const todos = loadTodos();
  const filteredTodos = todos.filter((todo: any) => todo.id !== id);
  localStorage.setItem(TODOS_KEY, JSON.stringify(filteredTodos));
};
