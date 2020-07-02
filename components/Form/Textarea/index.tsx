import * as React from "react";
import { useState } from "react";
import { Colors } from "../../../constants/design-tokens";
import Icon from "../../Icon";
import { InputStatus } from "../FormElement.model";
import classNames from "classnames";
import { FormElementInputStyles } from "../FormElement.shared.css";

interface Props {
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  status?: InputStatus;
  rows?: number;
  resize?: boolean;
  autoHeight?: boolean;
  onChange: (value: string | number) => void;
}

const Textarea: React.FC<Props> = ({
  value,
  onChange,
  status,
  placeholder = "",
  rows = 3,
  disabled = false,
  resize = true,
  autoHeight = false,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  let textareaRef: HTMLTextAreaElement | null;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const updatedValue = e.currentTarget.value;
    setCurrentValue(updatedValue);
    onChange(updatedValue);
  };


  React.useEffect(() => {
    if (currentValue && autoHeight && textareaRef) {
      textareaRef.style.height = `0px`;
      textareaRef.style.height = `${textareaRef.scrollHeight + 4}px`;
    }
  }, [currentValue])

  return (
    <>
      <textarea
        ref={(ref) => textareaRef = ref}
        className={classNames(
          "Textarea",
          resize ? "" : "disabled-resize",
          autoHeight ? "autoHeight" : ""
        )}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
        rows={autoHeight ? 1 : rows}
        disabled={disabled}
      />
      {status ? (
        <span className="Textarea-Icon">
          <Icon
            name={status}
            color={status === InputStatus.VALID ? Colors.success : ""}
          />
        </span>
      ) : (
        <></>
      )}
      <style jsx>{`
        ${FormElementInputStyles}
        .Textarea.disabled-resize {
          resize: none;
        }
        .Textarea.autoHeight {
          overflow: hidden;
          resize: none;
        }

        .Textarea-Icon {
          display: inline-block;
          margin-left: -7px;
          transform: translateX(-100%) translateY(-10px);
          vertical-align: -3px;
        }
      `}</style>
    </>
  );
};

export default Textarea;
