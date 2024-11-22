// Копирование почты
export const copyBuffer = (evt: Event) => {
  const elem = evt.target as HTMLElement;
  elem && navigator.clipboard.writeText(elem.textContent as string);

  //
  setMessage('Почта скопирована');
};
