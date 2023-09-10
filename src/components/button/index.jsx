import Loading from "components/loading";

import style from "./button.module.scss";

const Button = ({
  className,
  title,
  handleClick,
  type,
  isLoading,
  disabled,
  icon,
}) => {
  return (
    <button
      className={`${style.btn} ${className}`}
      onClick={(e) => {
        handleClick && handleClick(e);
      }}
      type={type}
      disabled={disabled || isLoading || false}
      style={{ pointerEvents: isLoading || disabled ? "none" : "auto" }}
    >
      {icon && <img src={icon} alt={"button icon"} />}
      {isLoading ? <Loading loaderClass={style.loaderClass} /> : title}
    </button>
  );
};

export default Button;
