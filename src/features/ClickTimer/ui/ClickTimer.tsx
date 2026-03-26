import { useRef } from "react";

type TClickTimerCount = {
  firstClick: number;
  count: number;
}

const ClickTimer = () => {
  const clickCount = useRef<TClickTimerCount>({
    firstClick: 0,
    count: 0,
  });

  return (
    <>
      <h3>ClickTimer</h3>
      <button onClick={() => {
        if (clickCount.current.firstClick === 0) clickCount.current.firstClick = Date.now();
        clickCount.current.count++;
        console.log(`Разница во времени с первым нажатием: ${Date.now() - clickCount.current.firstClick}; количество нажатий: ${clickCount.current.count}.`);
      }}>Click me</button>
    </>
  );
}

export default ClickTimer;
