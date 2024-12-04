import React, { useEffect, useRef } from "react";
import p5 from "p5";
import sketch from "./p5Setup"; // Adjust the path if needed

const BackgroundAnimation = ({ isDarkTheme }) => {
  const p5ContainerRef = useRef();

  useEffect(() => {
    // Pass theme as an argument to the p5 sketch
    const myP5 = new p5((p) => sketch(p, isDarkTheme), p5ContainerRef.current);

    return () => myP5.remove(); // Cleanup p5 instance on unmount
  }, [isDarkTheme]); // Re-run effect when the theme changes

  return <div ref={p5ContainerRef} style={{ position: "absolute", zIndex: -1 }} />;
};

export default BackgroundAnimation;
