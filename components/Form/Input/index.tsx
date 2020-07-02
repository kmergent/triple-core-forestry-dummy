import * as React from "react";
import { useState } from "react";
import { InputStatus } from "../FormElement.model";
import Icon from "../../Icon";
import { Colors } from "../../../constants/design-tokens";
import { FormElementInputStyles } from "../FormElement.shared.css";


interface Props {
  type: string;
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  status?: InputStatus;
  onChange: (value: string | number) => void;
}

const Input: React.FC<Props> = ({
  type,
  value,
  onChange,
  status,
  placeholder = "",
  disabled = false,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedValue = e.currentTarget.value;
    setCurrentValue(updatedValue);
    onChange(updatedValue);
  };


  return (
    <>
      <input
        className={"Input"}
        type={type}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
      {status ? (
        <span className="Input-Icon">
          <Icon name={status} color={status === InputStatus.VALID ? Colors.success : ''}/>
        </span>
      ) : (
        <></>
      )}
      <style jsx>{`
        ${FormElementInputStyles}
        .Input-Icon {
          display: inline-block;
          margin-left: -7px;
          transform: translateX(-100%);
          vertical-align: -3px;
        }
      `}</style>
    </>
  );
};

export default Input;
