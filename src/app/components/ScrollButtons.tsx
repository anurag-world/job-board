import React from 'react';

type ScrollButtonsProps = {
  direction: string;
  scroll: (value: string) => void;
};

export default function ScrollButtons({
  direction,
  scroll,
}: ScrollButtonsProps) {
  const className = `absolute top-1/2 ${direction}-0 transform -translate-y-1/2 bg-white text-black border border-solid border-gray-200 p-2 w-10 rounded-full shadow-md hover:bg-gray-50`;
  return (
    <button onClick={() => scroll(direction)} className={className}>
      &#8592;
    </button>
  );
}
