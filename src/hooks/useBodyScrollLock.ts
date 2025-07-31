import { useEffect } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export const useBodyScrollLock = (enabled = true) => {
  useEffect(() => {
    const targetElement = document.querySelector("body");
    if (enabled && targetElement) disableBodyScroll(targetElement);
    return () => {
      if (targetElement) enableBodyScroll(targetElement);
      clearAllBodyScrollLocks();
    };
  }, [enabled]);
};
