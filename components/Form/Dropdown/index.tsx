import * as React from "react";
import List, { ListStyle } from "../../List";
import classNames from "classnames";
import Button from "../../Button";
import { formElementWidth } from "../FormElement.shared.css";
import { Spacing, Colors } from "../../../constants/design-tokens";

export interface DropdownOption {
  label: string;
  value?: string;
}

interface Props {
  value?: string | number;
  options?: DropdownOption[];
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string | number, name?: string) => void;
}

const Dropdown: React.FC<Props> = ({
  onChange,
  value = "",
  options = [],
  name = "",
  placeholder = "Option wählen",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState({
    label: "",
  });
  const defaultOption = { label: "" };
  const ref = React.useRef<HTMLDivElement>(null);

  const documentClickHandler = (event: any) => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    const updatedSelectedOption =
      options.find((option) => option.value === value) ||
      options[value] ||
      defaultOption;
    setSelectedOption(updatedSelectedOption);
  }, [value]);

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", documentClickHandler);
      return () => {
        document.removeEventListener("mousedown", documentClickHandler);
      };
    } else {
      return () => {};
    }
  }, [ref, isOpen]);

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: string | number): void => {
    console.log(name);
    setIsOpen(false);
    onChange(value, name);
  };

  const renderSelect = (): JSX.Element => {
    return (
      <select
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange(e.currentTarget.value)
        }
        value={value}
      >
        {value ? (
          ""
        ) : (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={option.value || index} value={option.value || index}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  const renderDropdownOptions = (): JSX.Element => {
    return (
      <List type={ListStyle.BOX}>
        {options.map((option, index) => (
          <div
            key={option.value || index}
            className={classNames(
              "Dropdown-option",
              (option.value && option.value === value) ||
                (!option.value && index === value)
                ? "active"
                : ""
            )}
          >
            <Button
              text={option.label}
              type="link"
              onClick={() => handleChange(option.value || index)}
            />
          </div>
        ))}
      </List>
    );
  };

  return (
    <>
      <div className="Dropdown" ref={ref}>
        {renderSelect()}
        <Button
          text={selectedOption.label || placeholder}
          type={selectedOption.label ? "dropdown" : "dropdown-placeholder"}
          disabled={disabled}
          onClick={toggleIsOpen}
        />
        <span
          className={classNames(
            "Dropdown-arrow",
            isOpen ? "open" : "",
            disabled ? "disabled" : ""
          )}
        ></span>
        {isOpen ? renderDropdownOptions() : ""}
      </div>
      <style jsx>{`
        select {
          display: none;
        }

        .Dropdown {
          ${formElementWidth};
          position: relative;
        }

        .Dropdown-arrow {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 0.25rem solid transparent;
          border-right: 0.25rem solid transparent;

          border-top: 0.5rem solid ${Colors.text};
          right: 1.5rem;
          top: 0.75rem;
        }

        .Dropdown-arrow.open {
          border-top: 0;
          border-bottom: 0.5rem solid ${Colors.text};
        }

        .Dropdown-arrow.disabled {
          border-top-color: ${Colors.inactive};
        }

        .Dropdown .List.type-2 {
          position: absolute;
          top: calc(100% - 0.3rem);
          left: ${Spacing.medium};
          right: ${Spacing.medium};
          border-color: ${Colors.primary.default};
          background: ${Colors.lightBackground};
          z-index: 100;
        }
      `}</style>
    </>
  );
};

export default Dropdown;
