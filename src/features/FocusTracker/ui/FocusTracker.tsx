import { useRef } from "react";

const FocusTracker = () => {
  const focusField = useRef<HTMLInputElement | null>(null);
  const focusCount = useRef(0);

  return (
    <>
      <h3>FocusTracker</h3>
      <input type="text" placeholder="Это простое поле" />
      <input type="text" ref={focusField} placeholder="Это поле будет в фокусе после нажатия" onFocus={(e) => {
        if (e.relatedTarget) {
          focusCount.current++;
          console.log(`Количество фокусов на поле: ${focusCount.current}`);
        }
      }} />
      <button onClick={() => focusField.current!.focus()}>Click me!</button>
    </>
  );
}

export default FocusTracker;
