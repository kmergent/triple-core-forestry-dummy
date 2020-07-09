import * as React from "react";
import { withKnobs, array, select } from "@storybook/addon-knobs";

import List, { ListStyle } from "../components/List";

export default {
  component: List,
  title: "List",
  decorators: [withKnobs],
};

const defaultValues = {
  listItems: ["Item 1", "Item 2", "Item 3"],
};

const getListValue = () => array("List items", defaultValues.listItems);
const getActiveElementValue = () => select("Active element", ['none', ...getListValue()], '');

export const ListDefault = () => (
  <>
    <h3>Default List</h3>
    <List>
      {getListValue().map((value, key) => (
        <li key={key}>{value}</li>
      ))}
    </List>
  </>
);

export const CheckList = () => (
    <>
      <h3>Check list</h3>
      <List type={ListStyle.CHECK}>
        {getListValue().map((value, key) => (
          <span key={key}>{value}</span>
        ))}
      </List>
    </>
  );

  export const ListBox = () => (
    <>
      <h3>List Box</h3>
      <div style={{width: "25vw"}}>
        <List type={ListStyle.BOX}>
            {getListValue().map((value, key) => (
            <span key={key} className={getActiveElementValue() === value ? 'active' : ''}>{value}</span>
            ))}
        </List>
      </div>
    </>
  );
