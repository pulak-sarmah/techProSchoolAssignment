import styles from "./index.module.css";

interface ButtonProps {
  name: string;
  backgroundColor: string;
  textColor?: string;
  hoverBackgroundColor: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button}  ${backgroundColor} ${
        textColor || "text-white"
      } hover:${hoverBackgroundColor} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
