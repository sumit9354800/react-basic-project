import { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1; // Har render par value badhti rahegi
  });

  return (
    <div>
      <p>Button Clicked: {count} times</p>
      <p>Component Rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default RenderCounter;