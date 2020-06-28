import * as React from "react";
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";

import Input, { InputStatus } from "../components/Input";

export default {
  component: Input,
  title: "Input",
  decorators: [withKnobs],
};

const defaultValues = {
  placeholder: "Placeholder",
  disabled: false,
  status: undefined
};

const statusOptions = {
    valid: InputStatus.VALID,
    error: InputStatus.ERROR,
    none: undefined,
  };

const getPlaceholderValue = () => text("Placeholder", defaultValues.placeholder, "");
const getDisabledValue = () => boolean("Disabled", defaultValues.disabled, "");
const getStatus = () => radios("Status", statusOptions, defaultValues.status, "");

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
