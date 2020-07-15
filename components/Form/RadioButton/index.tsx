import * as React from "react";
import { Colors } from "../../../constants/design-tokens";
import { FormElementBoxStyles } from "../FormElement.shared.css";
import classNames from "classnames";

interface Props {
  value: boolean;
  label?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: boolean, name?: string) => void;
}

const RadioButton: React.FC<Props> = ({
  value,
  label = "",
  disabled = false,
  onChange,
  ...props
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedValue = e.currentTarget.checked;
    onChange(updatedValue, props.name);
  };

  return (
    <label
      className={classNames(
        "RadioButton",
        disabled ? "RadioButton--disabled" : "",
        value ? "RadioButton--selected" : ""
      )}
    >
      <span className="RadioButton-box"></span>
      <span>{label}</span>
      <input
        type="radio"
        onChange={handleChange}
        disabled={disabled}
        checked={value}
        {...props}
      />
      <style jsx>{`
        ${FormElementBoxStyles}

        .RadioButton-box {
          border-radius: 50%;
        }

        .RadioButton-box:before {
          content: "";
          position: absolute;
          display: inline-block;
          width: 0.5em;
          height: 0.5em;
          top: 0.15em;
          left: 0.1em;
          border-radius: 50%;
        }
        .RadioButton--selected .RadioButton-box:before {
          background: ${Colors.primary.default};
        }
        .RadioButton--disabled .RadioButton-box:before {
          background: ${Colors.inactive};
        }
      `}</style>
    </label>
  );
};

export default RadioButton;
