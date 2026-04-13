import { useRef } from "react";

const DebouncedLogger = () => {
  const timeoutRef = useRef<number>(null);

  return (
    <>
      <h3>DebouncedLogger</h3>
      <input type="text" onChange={(e) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          console.log(`Введено: ${e.target.value}`);
        }, 500);
      }} />
    </>
  );
}

export default DebouncedLogger;
