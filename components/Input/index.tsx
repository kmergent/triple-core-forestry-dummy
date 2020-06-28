import * as React from "react";
import { useState } from "react";
import { Colors } from "../../constants/design-tokens";
import Icon from "../Icon";

export enum InputStatus {
  "VALID" = "check",
  "ERROR" = "alert-triangle",
}

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
        .Input {
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.2;
          background: transparent;
          padding: 6px ${status ? 'calc(1.1rem + 12px)' : '7px'} 4px 7px;
          width: 100%;
          max-width: 80vw;
          border-width: 0 0 2px 0;
          border-style: solid;
          border-color: ${Colors.primary.default};
          caret-color: ${Colors.primary.default};
        }
        .Input::placeholder {
          font-weight: 400;
          color: ${Colors.inactive};
        }
        .Input:focus {
          outline: 0;
          border-width: 2px;
          padding: 4px ${status ? 'calc(1.1rem + 10px)' : '7px'} 4px 5px;
          background: ${Colors.lightBackground};
        }
        .Input:disabled {
          cursor: default;
          border-bottom-color: ${Colors.inactive};
        }

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
