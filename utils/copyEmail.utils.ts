export const copyBuffer = (evt: Event) => {
  // Копирование почты
  const elem = evt.target as HTMLElement;
  elem && navigator.clipboard.writeText(elem.textContent as string);
};
