import { useEffect, useState } from "react";

const useGeneralForm = () => {
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtonUp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButtonUp) return null;

  return {
    showButtonUp,
    setShowButtonUp,
    scrollTop,
  };
};

export default useGeneralForm;
