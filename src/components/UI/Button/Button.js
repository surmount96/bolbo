const Button = ({ children, className, ...rest }) => {
  const defaultClasses = "h-60 rounded-56 text-sm md:text-xl font-bold";

  const classes = ` ${className} ${defaultClasses}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
