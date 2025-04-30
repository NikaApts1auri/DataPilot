import { useCallback } from "react";

const useScrollToBottom = () => {
  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return scrollToBottom;
};

export default useScrollToBottom;
