import { RefObject } from 'react';

export const handleScroll = (
  componentRef: RefObject<HTMLDivElement>,
  direction: 'left' | 'right'
) => {
  if (componentRef.current) {
    const scrollAmount = 300;
    console.log(`Scrolling ${direction} by ${scrollAmount}px`);
    if (direction === 'left') {
      componentRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      componentRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  } else {
    console.error('componentRef is not attached to any element.');
  }
};
