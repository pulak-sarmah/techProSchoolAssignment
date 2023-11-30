import styles from "./index.module.css";

interface ButtonProps {
  name: string;
  backgroundColor: string;
  textColor?: string;
  hoverBackgroundColor: string;
  className?: string;
}

const Button = ({
  name,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button}  ${backgroundColor} ${
        textColor || "text-white"
      } hover:${hoverBackgroundColor} ${className} `}
    >
      {name}
    </button>
  );
};

export default Button;
