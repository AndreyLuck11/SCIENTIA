import React from "react";

interface InputProps {
  type?: string
}

const Input = ({type}: InputProps) => {
  return (
    <input type= "text"/>
  );
};

export default Input;
