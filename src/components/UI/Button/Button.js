const Button = ({ children, className, ...rest }) => {
  const defaultClasses = "h-60 rounded-56 text-xl font-bold";

  const classes = `${defaultClasses} ${className} `;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
