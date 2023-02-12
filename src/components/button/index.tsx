import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  return href ? (
    <Link to={href}>
      <button {...props}>{children}</button>
    </Link>
  ) : (
    <button {...props}>{children}</button>
  );
};

export default Button;
