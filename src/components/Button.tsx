import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentProps<typeof ShadButton>;

const Button = ({
  label,
  className,
  style,
  ...props
}: ButtonProps) => {
  return (
    <ShadButton
      className={cn(className)}
      style={style}
      {...props}
    >
      {label}
    </ShadButton>
    
  );
};

export default Button;