import { renderListItems } from "./renderListItems";
import { renderTotals } from "./renderTotals";
import { AllSelectors } from "./selectors";
import {
  addTodo,
  deleteItem,
  getCurrentState,
  markComplete,
  markIncomplete,
  undoState,
} from "./state";
import "./styles.css";

const selectors = AllSelectors(document);

const renderData = () => {
  const { todos, completed } = getCurrentState();
  renderListItems(
    selectors.todoItemsEl as HTMLUListElement,
    todos,
    deleteTodosHandler
  );
  renderListItems(
    selectors.completedItemsEl as HTMLUListElement,
    completed,
    deleteTodosHandler
  );
  renderTotals(document, getCurrentState());
};

const deleteTodosHandler = (e: MouseEvent) => {
  e.stopPropagation();
  const button = e.target as HTMLButtonElement;
  const listId = button.parentElement.parentElement.id;
  const index = parseInt(button.parentElement.id);

  const listType = listId === "todo-items" ? "todos" : "completed";
  console.log(listType);
  deleteItem(index, listType);
  renderData();
};

selectors.inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const input = selectors.inputEl as HTMLInputElement;
    addTodo(input.value);
    renderData();
    input.value = "";
  }
});

selectors.todoItemsEl.addEventListener("click", (e) => {
  const element = e.target as HTMLElement;
  if (element.id !== "todo-items") {
    const index = parseInt(element.id);
    markComplete(index);
    renderData();
  }
});

selectors.completedItemsEl.addEventListener("click", (e) => {
  const element = e.target as HTMLElement;
  if (element.id !== "completed-items") {
    const index = parseInt(element.id);
    markIncomplete(index);
    renderData();
  }
});

selectors.undoButton.addEventListener("click", (e) => {
  undoState();
  renderData();
});

console.log("Got here");
