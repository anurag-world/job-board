type RightScrollButtonsProps = {
  onClick: () => void;
};

export default function RightScrollButtons({
  onClick,
}: RightScrollButtonsProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-400 border-2 border-solid border-gray-200 p-2 w-10 rounded-full shadow-md hover:bg-gray-50"
    >
      {'>'}
    </button>
  );
}
