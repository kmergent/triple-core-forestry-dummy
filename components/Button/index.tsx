import * as React from "react";
import { Colors, Spacing } from "../../constants/design-tokens";
import classNames from "classnames";
import { baseInset as formElementBaseInset } from "../Form/FormElement.shared.css";

interface Props {
  text: string;
  type?: "primary" | "secondary" | "link" | "submit" | "dropdown" | "dropdown-placeholder";
  size?: "medium" | "large";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({
  text,
  type = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <>
      <button
        type={type === "submit" ? "submit" : "button"}
        className={classNames(
          "Button",
          "type-" + (type === "submit" ? "primary" : type),
          "size-" + size
        )}
        {...props}
      >
        {text}
      </button>
      <style jsx>{`
        .Button {
          min-height: 2rem;
          padding: 0.2rem ${Spacing.medium};
          border: 0;
          border: 2px solid ${Colors.primary.default};
          border-radius: 0;
          font-family: inherit;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.01rem;
          line-height: 1.2;
          text-align: center;
          cursor: pointer;
        }
        .Button:hover, .Button:focus {
          border-bottom-color: ${Colors.primary.active};
          box-shadow: inset 0px -1px ${Colors.primary.active};
          outline: none;
        }
        .Button:disabled {
          border-color: ${Colors.inactive};
          pointer-events: none;
        }

        /* TYPES */
        
        .Button.type-primary {
          background-color: ${Colors.primary.default};
          color: ${Colors.primary.text};
        }
        .Button.type-primary:active {
          border-color: ${Colors.primary.active};
          background-color: ${Colors.primary.active};
          outline: none:
        }
        .Button.type-primary:disabled {
          background: ${Colors.inactive};
        }

        .Button.type-secondary {
          background-color: transparent;
          color: ${Colors.primary.default};
        }
        .Button.type-secondary:active {
          border-color: ${Colors.primary.active};
          color: ${Colors.primary.active};
          outline: none:
        }
        .Button.type-secondary:disabled {
          color: ${Colors.inactive};
        }

        .Button.type-link {
          min-height: 0;
          font-size: 1em;
          color: ${Colors.primary.default};
          border-width: 0;
          border-color: transparent;
          padding: 0; 
          background: transparent;
        }
        .Button.type-link:hover, .Button.type-link:focus {
          box-shadow: inset 0 -2px 0 ${Colors.primary.default};
        }
        .Button.type-link:active {
          border-bottom-color: transparent;
          color: ${Colors.primary.active};
        }
        .Button.type-link:disabled {
          color: ${Colors.inactive};
        }

        .Button.type-dropdown,
        .Button.type-dropdown-placeholder {
          width: 100%;
          font-weight: normal;
          font-size: 1rem;
          padding: ${formElementBaseInset};
          padding-right: 2.75rem;
          border-top-color: transparent; 
          border-right-color: transparent; 
          border-left-color: transparent; 
          background: transparent;
          text-align: left;
        }

        .Button.type-dropdown:hover,
        .Button.type-dropdown:focus,
        .Button.type-dropdown-placeholder:hover,
        .Button.type-dropdown-placeholder:focus {
          box-shadow: none;
        }

        .Button.type-dropdown-placeholder {
          color: ${Colors.inactive};
        }

        /* SIZES */

        Button.size-large {
          font-size: 1.6rem;
          border-width: 3px;
          padding-left: ${Spacing.large};
          padding-right: ${Spacing.large};
          min-height: 2.75rem;
        }
        Button.size-large:hover {
          box-shadow: inset 0px -2px ${Colors.primary.active};
        }
      `}</style>
    </>
  );
};

export default Button;
