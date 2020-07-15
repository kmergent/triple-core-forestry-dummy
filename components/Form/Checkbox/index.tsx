import * as React from "react";
import { Colors } from "../../../constants/design-tokens";
import Icon from "../../Icon";
import { FormElementBoxStyles } from "../FormElement.shared.css";
import classNames from "classnames";

interface Props {
  value: boolean;
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: boolean, name?: string) => void;
}

const Checkbox: React.FC<Props> = ({
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
      className={classNames("Checkbox", disabled ? "Checkbox--disabled" : "")}
    >
      <span className="Checkbox-box">
        {value ? <Icon name="check" color={Colors.primary.default} /> : ""}
      </span>
      <span>{label}</span>
      <input
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        checked={value}
        {...props}
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
