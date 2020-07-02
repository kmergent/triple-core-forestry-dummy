import * as React from "react";
import { withKnobs, text, boolean, radios, number } from "@storybook/addon-knobs";

import Input from "../components/Form/Input";
import Textarea from "../components/Form/Textarea";
import Checkbox from "../components/Form/Checkbox";
import RadioButton from "../components/Form/RadioButton";
import { InputStatus } from "../components/Form/FormElement.model";

export default {
  component: Input,
  title: "Forms",
  decorators: [withKnobs],
};

const defaultValues = {
  placeholder: "Placeholder",
  label: "Label",
  disabled: false,
  status: undefined,
  textareaRows: 3,
  resize: false,
  autoHeight: false
};

const statusOptions = {
    valid: InputStatus.VALID,
    error: InputStatus.ERROR,
    none: undefined,
  };

const getPlaceholderValue = () => text("Placeholder", defaultValues.placeholder, "");
const getLabelValue = () => text("Label", defaultValues.label, "");
const getDisabledValue = () => boolean("Disabled", defaultValues.disabled, "");
const getStatus = () => radios("Status", statusOptions, defaultValues.status, "");
const getTextareaRows = () => number("Rows", defaultValues.textareaRows, {}, "");
const getResizeValue = () => boolean("Resize", defaultValues.resize, "");
const getAutoHeightValue = () => boolean("Auto Height", defaultValues.autoHeight, "");

const onChange = () => void 0;

export const TextInput = () => (
  <>
    <h3>Text Input</h3>
    <Input
      type="text"
      value=""
      placeholder={getPlaceholderValue()}
      disabled={getDisabledValue()}
      onChange={onChange}
      status={getStatus()}
    />
  </>
);
export const NumberInput = () => (
  <>
    <h3>Numeric Input</h3>
    <Input
      type="number"
      value=""
      placeholder={getPlaceholderValue()}
      disabled={getDisabledValue()}
      onChange={onChange}
      status={getStatus()}
    />
  </>
);
export const TextField = () => (
  <>
    <h3>Text Field</h3>
    <Textarea
      value=""
      placeholder={getPlaceholderValue()}
      rows={getTextareaRows()}
      disabled={getDisabledValue()}
      resize={getResizeValue()}
      autoHeight={getAutoHeightValue()}
      status={getStatus()}
      onChange={onChange}
    />
  </>
);


export const InputCheckbox = () => (
  <>
    <h3>Checkbox</h3>
    <Checkbox
      checked={false}
      disabled={getDisabledValue()}
      label={getLabelValue()}
      onChange={onChange}
    />
  </>
);

export const InputRadioButton = () => (
  <>
    <h3>Radio Button</h3>
    <RadioButton
      checked={false}
      disabled={getDisabledValue()}
      label={getLabelValue()}
      onChange={onChange}
    />
  </>
);