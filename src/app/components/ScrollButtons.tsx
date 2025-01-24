type ScrollButtonsProps = {
  direction: 'left' | 'right';
  scroll: (direction: 'left' | 'right') => void;
};

export default function ScrollButtons({
  direction,
  scroll,
}: ScrollButtonsProps) {
  const className = `absolute top-1/2 ${direction}-0 transform -translate-y-1/2 bg-white text-gray-400 border-2 border-solid border-gray-200 p-2 w-10 rounded-full shadow-md hover:bg-gray-50`;
  return (
    <button onClick={() => scroll(direction)} className={className}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
}
