import { useState, useRef, useEffect, use } from "react";

export const Debounce = () => {
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [search]);

  return (
    <input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};
