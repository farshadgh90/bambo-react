import { SetStateAction } from "react";

export interface IInputState {
  email: string;
  text: string;
}

export interface PropsInput<TName, TState> {
  name: TName;
  state: TState;
  setState: (value: React.SetStateAction<TState>) => void;
  className: string;
  placeholder: string;
}
