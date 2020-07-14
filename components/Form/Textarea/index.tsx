import * as React from "react";
import { Colors } from "../../../constants/design-tokens";
import Icon from "../../Icon";
import { InputStatus } from "../FormElement.model";
import classNames from "classnames";
import { FormElementInputStyles } from "../FormElement.shared.css";

interface Props {
  value: string | number;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  status?: InputStatus;
  rows?: number;
  resize?: boolean;
  autoHeight?: boolean;
  required?: boolean;
  maxLength?: number;
  onChange: (value: string | number, name?: string) => void;
}

const Textarea: React.FC<Props> = ({
  value,
  onChange,
  status,
  rows = 3,
  resize = true,
  maxLength = 140,
  autoHeight = false,
  ...props
}) => {

  let textareaRef: HTMLTextAreaElement | null;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const updatedValue = e.currentTarget.value;
    onChange(updatedValue, name);
  };


  React.useEffect(() => {
    if (value && autoHeight && textareaRef) {
      textareaRef.style.height = `0px`;
      textareaRef.style.height = `${textareaRef.scrollHeight + 4}px`;
    }
  }, [value])

  return (
    <>
      <textarea
        ref={(ref) => textareaRef = ref}
        className={classNames(
          "Textarea",
          resize ? "" : "disabled-resize",
          autoHeight ? "autoHeight" : "",
          status ? "status" : ""
        )}
        value={value}
        onChange={handleChange}
        rows={autoHeight ? 1 : rows}
        maxLength={maxLength}
        {...props}
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
