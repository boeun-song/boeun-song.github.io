import { useEffect } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export const useBodyScrollLock = () => {
  useEffect(() => {
    const targetElement = document.querySelector("body");
    if (targetElement) disableBodyScroll(targetElement);
    return () => {
      if (targetElement) enableBodyScroll(targetElement);
      clearAllBodyScrollLocks();
    };
  }, []);
};
