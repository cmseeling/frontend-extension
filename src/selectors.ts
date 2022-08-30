export const AllSelectors = (document: Document) => {
  return {
    inputEl: document.getElementById("add-todo-input"),
    todoItemsEl: document.getElementById("todo-items"),
    completedItemsEl: document.getElementById("completed-items"),

    todoTotalEl: document.getElementById("todo-total"),
    completedTotalEl: document.getElementById("completed-total"),
    allItemsTotalEl: document.getElementById("all-items"),

    undoButton: document.getElementById("undo"),
  };
};
