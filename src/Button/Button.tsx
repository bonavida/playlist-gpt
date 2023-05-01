interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = ({
  type = 'button',
  children,
  className,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
