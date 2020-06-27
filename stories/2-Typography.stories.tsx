import * as React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";

import Subline from "../components/Subline";

export default {
  title: "Typography",
  decorators: [withKnobs],
};

const defaultValues = {
  headline: "Headline",
  subline:"",
  paragraph: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
};

const getHeadlineValue = () => text("Headline", defaultValues.headline, "");
const getSublineValue = () => text("Subline", defaultValues.subline, "");
const getParagraphValue = () => text("Paragraph", defaultValues.paragraph, "");

export const HeadlinesAndParagraphs = () => (
  <>
    <h1>H1 {getHeadlineValue()}</h1>
    {getSublineValue() ? <Subline forType="h1">{getSublineValue()}</Subline> : ''}
    <p>{getParagraphValue()}</p>
    <h2>H2 {getHeadlineValue()}</h2>
    {getSublineValue() ? <Subline forType="h2">{getSublineValue()}</Subline> : ''}
    <p>{getParagraphValue()}</p>
    <h3>H3 {getHeadlineValue()}</h3>
    <p>{getParagraphValue()}</p>
    <p>
      {getParagraphValue()}
      <br />
      <em>{getParagraphValue()}</em>
      <br />
      {getParagraphValue()}
      &nbsp;<strong>Strong Words</strong>&nbsp;
      {getParagraphValue()}
    </p>
  </>
);

export const Small = () => (
  <small>This is a disclaimer or an image subtitle</small>
);
