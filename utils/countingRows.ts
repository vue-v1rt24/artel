export const countingRows = (el: HTMLElement) => {
  const lineHeight = parseInt(getComputedStyle(el).lineHeight);
  const lineCount = Math.ceil(el.scrollHeight / lineHeight);

  return lineCount;
};
