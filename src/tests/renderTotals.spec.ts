import { AllSelectors } from "../selectors";
import { TodoState } from "../state";
import { renderTotals } from "../renderTotals";

test("renderTotals shows the total counts on screen", () => {
  // arrange
  document.body.innerHTML = `<div>
    <div id="todo-total"/>
    <div id="completed-total"/>
    <div id="all-items"/>
  </div>`;

  const state: TodoState = {
    todos: ["todo 1", "todo 2"],
    completed: ["completed 3"],
  };

  // execute
  renderTotals(document, state);

  // assert
  const selectors = AllSelectors(document);
  // todo: write assertion
});
