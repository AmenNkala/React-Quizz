import { useEffect, useState } from "react";

export default function ProgressBar({ maxValue }) {
  const [remainingTime, setRemainingTime] = useState(maxValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 10) return maxValue;
        return prevTime - 10;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [maxValue]);
  return <progress value={remainingTime} max={maxValue} />;
}
