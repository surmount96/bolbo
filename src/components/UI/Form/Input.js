const Input = ({ children, className, ...rest }) => {
  const defaultClasses =
    "px-4 h-14 rounded-56 border border-darkBlue text-black text-xl w-full focus:outline-none";

  const classes = `${defaultClasses} ${className}`;
  return <input className={classes} {...rest} />;
};

export default Input;
