export const removeChildNodes = (element: HTMLElement) => {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
};
