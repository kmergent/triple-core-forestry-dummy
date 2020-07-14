import { Colors, Spacing } from "../../constants/design-tokens";

export const formElementFont = `
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.2;
`;

export const formElementWidth = `
  width: 100%;
  max-width: 80vw;
`;

export const FormElementBoxStyles = `
  .Checkbox, .RadioButton {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    width: 100%;
    max-width: 80vw;
    ${formElementFont}
    ${formElementWidth}
  }
  .Checkbox-box, .RadioButton-box {
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    width: 0.75em;
    height: 0.75em;
    margin-right: 0.9em;
    background: ${Colors.lightBackground};
    border: 1px solid ${Colors.inactive};
    margin-top: 0.1em;
  }

  .Checkbox input, .RadioButton input {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
  }
  .RadioButton--disabled {
    color: ${Colors.inactive};
  }
  .Checkbox--disabled .Checkbox-box {
    background: transparent;
  }
`;
export const baseInset = `0 ${Spacing.small}`;

export const FormElementInputStyles = `
  .Textarea, .Input {
    
    ${formElementFont}
    ${formElementWidth}

    min-height: 2rem;

    padding: ${baseInset};
  
    box-sizing: border-box;
    
    border: 2px solid transparent;
    border-bottom-color: ${Colors.primary.default};
    background: transparent;
    caret-color: ${Colors.primary.default};
  }

  .Textarea.status, 
  .Input.status {
    padding-right: calc(1.725rem + ${baseInset});
  }

  .Textarea::placeholder,
  .Input::placeholder {
    font-weight: 400;
    color: ${Colors.inactive};
  }

  .Textarea:focus,
  .Input:focus {
    outline: 0;

    border-color: ${Colors.primary.default};
    background: ${Colors.lightBackground};
  }

  .Textarea.status:focus, 
  .Input.status:focus {
    padding-right: 1.725rem;
  }

  .Textarea:disabled,
  .Input:disabled {
    cursor: default;
    border-bottom-color: ${Colors.inactive};
  }
`;
