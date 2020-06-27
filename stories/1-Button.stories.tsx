import * as React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import Button from "../components/Button";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],
};

const defaultValues = {
  text: "Button Text",
  disabled: false,
};


const getTextValue = () => text("Text", defaultValues.text, "");
const getDisabledValue = () => boolean("Disabled", defaultValues.disabled, "");

export const Primary = () => (
  <>
    <h3>Medium</h3>
    <Button text={getTextValue()} disabled={getDisabledValue()}/>
    <h3>Large</h3>
    <Button text={getTextValue()} size="large"  disabled={getDisabledValue()}/>
  </>
);
export const Secondary = () => (
  <>
    <h3>Medium</h3>
    <Button text={getTextValue()} type="secondary"  disabled={getDisabledValue()}/>
    <h3>Large</h3>
    <Button text={getTextValue()} size="large" type="secondary" disabled={getDisabledValue()}/>
  </>
);

export const Link = () => (
  <>
    <h3>Button that appears in a headline <Button text={getTextValue()} type="link"  disabled={getDisabledValue()}/></h3>
    <p>Button that appears in a text block <Button text={getTextValue()} type="link"  disabled={getDisabledValue()}/></p>
  </>
);