import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      // the third argument "true" is to set the listener in the capturing phase, not in the bubbling phase
      document.addEventListener("click", handleClick, listenCapturing);

      // Clear function
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return { ref };
}
