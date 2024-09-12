interface ButtonProps {
  handleDeleteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DeleteButton({
  handleDeleteClick,
  ...rest
}: ButtonProps) {
  return (
    <button onClick={handleDeleteClick} {...rest} className="workout-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#222" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>
    </button>
  );
}
