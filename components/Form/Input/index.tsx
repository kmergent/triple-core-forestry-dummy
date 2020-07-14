import * as React from "react";
import { InputStatus } from "../FormElement.model";
import Icon from "../../Icon";
import { Colors } from "../../../constants/design-tokens";
import { FormElementInputStyles } from "../FormElement.shared.css";
import classNames from "classnames";


interface Props {
  type: string;
  value: string | number;
  name?: string; 
  placeholder?: string;
  disabled?: boolean;
  status?: InputStatus;
  required?: boolean;
  maxLength?: number;
  onChange: (value: string | number, name?: string) => void;
}

const Input: React.FC<Props> = ({
  onChange,
  status,
  maxLength = 50,
  ...props
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedValue = e.currentTarget.value;
    onChange(updatedValue, name);
  };


  return (
    <>
      <input
        className={classNames("Input", status ? "status" : "")}
        onChange={handleChange}
        maxLength={maxLength}
        {...props}
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
