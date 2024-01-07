import { useRef } from "react";

const useTourRefs = () => {
  const searchRef = useRef(null);
  const vacancyRef = useRef(null);

  return {
    searchRef,
    vacancyRef,
  };
};
export { useTourRefs };
