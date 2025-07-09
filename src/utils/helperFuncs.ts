export function throttle(fn: (...args: unknown[]) => void, delay: number) {
  let lastCall = 0;
  return function (...args: unknown[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return fn(...args);
  };
}

export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase()}`;
