import { useRef } from "react";

const useTourRefs = () => {
  const searchRef = useRef(null);
  const vacancyRef = useRef(null);
  const optionsRef = useRef(null);
  return {
    searchRef,
    vacancyRef,
    optionsRef,
  };
};
export { useTourRefs };
