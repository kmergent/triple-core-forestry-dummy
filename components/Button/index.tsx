import * as React from "react";
import { Colors } from "../../constants/design-tokens";
import classNames from "classnames";

interface Props {
  text: string;
  type?: "primary" | "secondary" | "link" | "submit";
  size?: "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  type = "primary",
  size = "medium",
  disabled = false,
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
        disabled={disabled}
      >
        {text}
      </button>
      <style jsx>{`
        .Button {
          padding: 0.3rem 0.8rem;
          border: 0;
          border: 2px solid ${Colors.primary.default};
          border-radius: 0;
          font-family: inherit;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.01rem;
          text-align: center;
          line-height: 1.1;
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
          font-size: 1em;
          color: ${Colors.primary.default};
          border-width: 0;
          border-color: transparent;
          padding: 0; 
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

        /* SIZES */

        Button.size-large {
          font-size: 1.6rem;
          border-width: 3px;
          padding: 0.4rem 1.2rem;
        }
        Button.size-large:hover {
          box-shadow: inset 0px -2px ${Colors.primary.active};
        }
      `}</style>
    </>
  );
};

export default Button;
