import { removeChildNodes } from "../removeChildNodes";

test("removeChildNodes removes content from node", () => {
  // arrange
  document.body.innerHTML = `<div id="testDiv">
    <div id="todo-total"/>
    <div id="completed-total"/>
    <div id="all-items"/>
  </div>`;

  // execute
  removeChildNodes(document.getElementById("testDiv"));

  // assert
  expect(document.getElementById("testDiv").innerHTML).toBe("");
});
