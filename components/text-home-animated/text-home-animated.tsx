import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web3", "Blockchain", "DeFi", "Smart Contract", "Custom"];

const TextHomeAnimated = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      text={TEXTS[index % TEXTS.length]}
      springConfig={presets.wobbly}
    />
  );
};

export default TextHomeAnimated;
