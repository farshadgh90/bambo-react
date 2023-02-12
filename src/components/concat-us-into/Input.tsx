import { FC } from "react";
import { IInputState, PropsInput } from "./data";

const Input: FC<PropsInput<keyof IInputState, IInputState>> = ({
  name,
  setState,
  state,
  className,
  placeholder,
}) => {
  return (
    <input
      name={name}
      value={state[name]}
      onChange={(e) =>
        setState((prevState) => ({ ...prevState, [name]: e.target.value }))
      }
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
