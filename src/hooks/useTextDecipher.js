import { useState, useEffect } from 'react';

const CHARS = "!@#$%^&*()_+-=[]{}|;:<>?/~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const useTextDecipher = (finalText, duration = 600) => {
  const [display, setDisplay] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const totalLength = finalText.length;
    const intervalMs = 25;
    const stepsNeeded = duration / intervalMs;
    const charsPerStep = totalLength / stepsNeeded;

    const interval = setInterval(() => {
      setDisplay(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return finalText[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += charsPerStep;

      if (iteration >= totalLength) {
        setDisplay(finalText);
        setIsComplete(true);
        clearInterval(interval);
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [finalText, duration]);

  return { display, isComplete };
};

export default useTextDecipher;
