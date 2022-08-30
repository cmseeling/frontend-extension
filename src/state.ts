export interface TodoState {
  todos: string[];
  completed: string[];
}

export const state: TodoState[] = [
  {
    todos: [],
    completed: [],
  },
];

let undoneState: TodoState;

export const getCurrentState = () => state[state.length - 1];

const addState = (todos: string[], completed: string[]) => {
  const newState = {
    todos,
    completed,
  };
  state.push(newState);
};

export const resetState = () => {
  state.length = 0;
  addState([], []);
};

export const addTodo = (todo: string) => {
  const { todos, completed } = getCurrentState();
  const todosCopy = [...todos];
  todosCopy.push(todo);

  addState(todosCopy, completed);
};

export const deleteItem = (index: number, listId: "todos" | "completed") => {
  const { todos, completed } = getCurrentState();
  if (listId === "todos") {
    const todosCopy = [...todos];
    todosCopy.splice(index, 2);
    addState(todosCopy, completed);
  } else if (listId === "completed") {
    const completedCopy = [...completed];
    completedCopy.splice(index, 2);
    addState(todos, completedCopy);
  }
};

export const markComplete = (index: number) => {
  const { todos, completed } = getCurrentState();
  const todosCopy = [...todos];
  const completedCopy = [...completed];

  const completedItem = todosCopy.splice(index, 1)[0];
  completedCopy.push(completedItem);

  addState(todos, completedCopy);
};

export const markIncomplete = (index: number) => {
  const { todos, completed } = getCurrentState();
  const todosCopy = [...todos];
  const completedCopy = [...completed];

  const incompleteItem = completedCopy.splice(index, 1)[0];
  todosCopy.push(incompleteItem);

  addState(todos, completedCopy);
};

export const undoState = () => {
  undoneState = state.pop();
};
