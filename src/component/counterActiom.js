import { DECREMENT, INCREMENT } from "./counterConstant";

export const Increment = () => {
  return {
    type: INCREMENT
  };
};

export const Decrement = () => {
  return {
    type: DECREMENT
  };
};
