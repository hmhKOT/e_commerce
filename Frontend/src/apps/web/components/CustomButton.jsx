import React, { forwardRef, memo } from "react";
const cx = (...classes) => classes.filter(Boolean).join(" ");
const SIZE_CLASSES = {
  sm: "text-sm px-3 py-1.5 rounded-md",
  md: "text-base px-4 py-2 rounded-lg",
  lg: "text-lg px-5 py-3 rounded-xl",
};
const VARIANT_CLASSES = {
  primary:
    "bg-green-600 hover:bg-green-700 text-white border border-transparent shadow-sm focus:ring-2 focus:ring-offset-1 focus:ring-green-500",
  secondary:
    "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm focus:ring-2 focus:ring-offset-1 focus:ring-gray-400",
  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-800 border border-transparent focus:ring-2 focus:ring-offset-1 focus:ring-gray-300",
};

const CustomButton = forwardRef(
  (
    {
      onClick,
      label,
      Icon = null,
      iconPosition = "left",
      type = "button",
      disabled = false,
      loading = false,
      size = "md",
      variant = "primary",
      className = "",
      ariaLabel,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const renderIcon = (Icon, props = {}) => {
      if (!Icon) return null;
      // Nếu người dùng truyền <ShoppingCart /> (React element) → trả thẳng
      if (React.isValidElement(Icon)) return Icon;
      // Ngược lại, giả sử Icon là component type (function / forwardRef / memo) → render như component
      return <Icon {...props} />;
    };
    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <span className="-ml-1 mr-2 inline-flex items-center">
            {renderIcon(Icon, { className: "w-5 h-5", "aria-hidden": "true" })}
          </span>
        )}
        {label && (
          <span className={cx("inline-block align-middle")}>{label}</span>
        )}
        {Icon && iconPosition === "right" && (
          <span className="ml-2 -mr-1 inline-flex items-center">
            {renderIcon(Icon, { className: "w-5 h-5", "aria-hidden": "true" })}
          </span>
        )}
        {loading && (
          <svg
            className="animate-spin ml-3 h-4 w-4 inline-block align-middle"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
      </>
    );
    return (
      <button
        ref={ref}
        type={type}
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        aria-label={ariaLabel || label}
        className={cx(
          "inline-flex items-center justify-center font-medium transition-shadow duration-150",
          SIZE_CLASSES[size] || SIZE_CLASSES.md,
          VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
          isDisabled ? "opacity-60 cursor-not-allowed" : "hover:shadow",
          className
        )}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default memo(CustomButton);
