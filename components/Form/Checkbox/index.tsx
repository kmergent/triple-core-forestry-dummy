import * as React from "react";
import { useState } from "react";
import { Colors } from "../../../constants/design-tokens";
import Icon from "../../Icon";
import { FormElementBoxStyles } from "../FormElement.shared.css";
import classNames from "classnames";

interface Props {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: React.FC<Props> = ({
  checked,
  label = "",
  disabled = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedValue = e.currentTarget.checked;
    setIsChecked(updatedValue);
    onChange(updatedValue);
  };

  return (
    <label
      className={classNames("Checkbox", disabled ? "Checkbox--disabled" : "")}
    >
      <span className="Checkbox-box">
        {isChecked ? <Icon name="check" color={Colors.primary.default} /> : ""}
      </span>
      <span>{label}</span>
      <input
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        checked={isChecked}
      />
      <style jsx>{`
        ${FormElementBoxStyles}

        .Checkbox-box .Icon {
          position: absolute;
          top: -0.25em;
          left: -0.1em;
          font-weight: bold;
          font-size: 1.2em;
        }
        .Checkbox--disabled .Icon {
          color: ${Colors.inactive};
        }
      `}</style>
    </label>
  );
};

export default Checkbox;
