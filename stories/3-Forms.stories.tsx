import * as React from "react";
import {
  withKnobs,
  text,
  boolean,
  radios,
  number,
} from "@storybook/addon-knobs";

import Input from "../components/Form/Input";
import Textarea from "../components/Form/Textarea";
import Checkbox from "../components/Form/Checkbox";
import RadioButton from "../components/Form/RadioButton";
import { InputStatus } from "../components/Form/FormElement.model";
import Form from "../components/Form";
import Dropdown from "../components/Form/Dropdown";

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
  autoHeight: false,
};

const statusOptions = {
  valid: InputStatus.VALID,
  error: InputStatus.ERROR,
  none: undefined,
};

const getPlaceholderValue = () =>
  text("Placeholder", defaultValues.placeholder, "");
const getLabelValue = () => text("Label", defaultValues.label, "");
const getDisabledValue = () => boolean("Disabled", defaultValues.disabled, "");
const getStatus = () =>
  radios("Status", statusOptions, defaultValues.status, "");
const getTextareaRows = () =>
  number("Rows", defaultValues.textareaRows, {}, "");
const getResizeValue = () => boolean("Resize", defaultValues.resize, "");
const getAutoHeightValue = () =>
  boolean("Auto Height", defaultValues.autoHeight, "");

export const TextInput = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <h3>Text Input</h3>
      <Input
        type="text"
        value={value}
        placeholder={getPlaceholderValue()}
        disabled={getDisabledValue()}
        status={getStatus()}
        onChange={(value: string) => setValue(value)}
      />
    </>
  );
};

export const NumberInput = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <h3>Numeric Input</h3>
      <Input
        type="number"
        value={value}
        placeholder={getPlaceholderValue()}
        disabled={getDisabledValue()}
        status={getStatus()}
        onChange={(value: number) => setValue(value)}
      />
    </>
  );
};
export const TextField = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <h3>Text Field</h3>
      <Textarea
        value={value}
        placeholder={getPlaceholderValue()}
        rows={getTextareaRows()}
        disabled={getDisabledValue()}
        resize={getResizeValue()}
        autoHeight={getAutoHeightValue()}
        status={getStatus()}
        onChange={(value: string) => setValue(value)}
      />
    </>
  );
};

export const InputCheckbox = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <>
      <h3>Checkbox</h3>
      <Checkbox
        checked={isChecked}
        disabled={getDisabledValue()}
        label={getLabelValue()}
        onChange={setIsChecked}
      />
    </>
  );
};

export const InputRadioButton = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <>
      <h3>Radio Button</h3>
      <RadioButton
        checked={isChecked}
        disabled={getDisabledValue()}
        label={getLabelValue()}
        onChange={setIsChecked}
      />
    </>
  );
};

export const SelectDropdown = () => {
  const [value, setValue] = React.useState("");

  const options = [
    { label: "Option 1", value: "option_1" },
    { label: "Option 2", value: "option_2" },
    { label: "Option 3", value: "option_3" },
  ]

  return (
    <>
      <h3>Dropdown</h3>
      <Dropdown
        value={value}
        placeholder={getPlaceholderValue()}
        disabled={getDisabledValue()}
        options={options}
        onChange={setValue}
      />
    </>
  );
};

export const FormExample = () => {
  return (
    <>
      <h3>Form</h3>
      <Form onSubmit={(result) => console.log(result)}>
        <Input
          type="text"
          value=""
          name="firstName"
          placeholder="Vorname"
          onChange={() => void 0}
        />
        <Input
          type="text"
          value=""
          name="lastName"
          placeholder="Nachname"
          onChange={() => void 0}
          required={true}
        />
        <Checkbox
          name="contactMe"
          label="Ich möchte kontaktiert werden"
          onChange={() => void 0}
        />
      </Form>
    </>
  );
};
