import { useLayoutEffect, useState } from "react";

const useCustomBreakpoints = () => {
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {
    xs: size <= 480,
    sm: size > 480 && size <= 576,
    md: size > 576 && size <= 768,
    lg: size > 768 && size <= 992,
    xl: size > 992 && size <= 1200,
    xxl: size > 1200,
  };
};

export default useCustomBreakpoints;

