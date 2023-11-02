import { useState } from "react";

export const useThrottle = (fn, delay) => {
  const [throttle, setThrottle] = useState(false);
  return (e) => {
    if (throttle) return;
    fn(e);
    setTimeout(() => {
      setThrottle(false);
    }, delay);
    setThrottle(true);
  };
};
