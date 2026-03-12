type ButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  label: string;
};

const Button = ({ className, style, label }: ButtonProps) => {
  return (
    <button
      className={className}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;