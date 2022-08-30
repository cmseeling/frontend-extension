import { removeChildNodes } from "./removeChildNodes";

export const renderListItems = (
  list: HTMLUListElement,
  items: string[],
  clickHandler?: (e: MouseEvent) => void
) => {
  removeChildNodes(list);
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.id = index.toString();
    listItem.textContent = item + " ";

    if (clickHandler) {
      const button = document.createElement("button");
      button.className = "delete-item";
      button.textContent = "delete";
      button.addEventListener("click", clickHandler, false);
    }

    fragment.appendChild(listItem);
  });

  list.appendChild(fragment);
};
