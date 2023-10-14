interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="w-ful bg-secondary hover:bg-accent focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
      w-3/4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
