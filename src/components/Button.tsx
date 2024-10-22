interface TButton {
  type: "submit" | "button";
  title: string;
  variant: "outline" | "filled";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type,
  title,
  variant,
  disabled,
  className,
  onClick,
}: TButton) => {
  const outline = "";
  const filled =
    "bg-[#3556AB] border-[#0D2972] border-2 shadow-[inset_0_5px_3px_-3px_rgba(255,255,255,0.2)]";
  return (
    <button
      type={type}
      disabled={disabled}
      className={`disabled:opacity-80 ${className} ${
        variant === "filled" ? filled : outline
      }`}
      onClick={onClick}
    >
      <span
        className={`${className} ${
          variant === "filled"
            ? "[text-shadow:0px_2px_1px_#030712] text-white"
            : ""
        }`}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
