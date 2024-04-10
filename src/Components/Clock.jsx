import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTimer] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTimer(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h2>Time : {time.toLocaleTimeString()}</h2>
      <h5>Date : {time.toLocaleDateString()}</h5>
    </>
  );
}