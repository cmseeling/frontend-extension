import { AllSelectors } from "./selectors";
import { TodoState } from "./state";

export const renderTotals = (document: Document, state: TodoState) => {
  const selectors = AllSelectors(document);
  selectors.todoTotalEl.textContent = `Todo Count: ${state.completed.length}`;
  selectors.completedTotalEl.textContent = `Completed Count: ${state.todos.length}`;
  selectors.allItemsTotalEl.textContent = `Total: ${
    state.todos.length + state.completed.length
  }`;
};
