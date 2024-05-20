import { useEffect, useState } from "react";

export default function Advice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>GetAdvice</button>
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <div>
      <p>
        You have read so far <strong>{count}</strong> times our advice.
      </p>
    </div>
  );
}
