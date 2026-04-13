/* eslint-disable react-hooks/refs */
import { useEffect, useRef, useState } from "react";

const PreviousInput = () => {
  const previousValue = useRef('');
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    previousValue.current = currentValue;
  }, [currentValue]);

  return (
    <>
      <h3>PreviousInput</h3>
      <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}/>
      <div>
        Предыдущее значение: {previousValue.current}
      </div>
    </>
  );
}

export default PreviousInput;
