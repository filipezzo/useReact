import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedValue(value);
    }, [delay]);

    return () => window.clearTimeout(id);
  }, [delay, value]);

  return deboucedValue;
}
