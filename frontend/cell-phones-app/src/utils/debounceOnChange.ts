type DebounceFunction = (event: OnChangeType) => void;

export function debounceOnChange(
  mainFunction: DebounceFunction,
  delay: number
): DebounceFunction {
  let timer: number;
  return function (event: OnChangeType) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainFunction(event);
    }, delay);
  };
}
