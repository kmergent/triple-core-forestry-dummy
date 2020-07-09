import * as React from "react";
import classNames from "classnames";
import { Colors, Spacing } from "../../constants/design-tokens";
import Icon from "../Icon";

export enum ListStyle {
  DEFAULT,
  CHECK,
  BOX,
}

interface Props {
  children: React.ReactNode;
  type?: ListStyle;
}

const List: React.FC<Props> = ({ children, type = ListStyle.DEFAULT }) => {
  
    const renderListItem = (
    listItem: JSX.Element,
    index: number
  ): JSX.Element => {

    const listItemChildren =
      type === ListStyle.CHECK ? (
        <>
          <Icon name="check" color={Colors.success} />
          {listItem.props.children}
        </>
      ) : (
        listItem.props.children
      );

    const clonedListItem = React.cloneElement(
      listItem,
      {...listItem.props},
      listItemChildren
    );

    return listItem.type === "li" ? (
      clonedListItem
    ) : (
      <li key={index}>{clonedListItem}</li>
    );
  };

  return (
    <>
      <ul className={classNames("List", "type-" + type)}>
        {React.Children.map(children, (formField, index) => (
          <>{renderListItem(formField as JSX.Element, index)}</>
        ))}
      </ul>

      <style jsx>{`
        .List {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .List.type-${ListStyle.DEFAULT} li::before {
          content: "\\25CF";
          display: inline-block;
          width: 1em;
          margin-right: ${Spacing.small};
          color: ${Colors.inactive};
        }

        .List.type-${ListStyle.CHECK} .Icon {
            width: 1em;
            margin-right: ${Spacing.small};
            vertical-align: -0.15em;
        }

        .List.type-${ListStyle.BOX} {
            display: block;
            border: 2px solid ${Colors.text};
            padding: ${Spacing.small};
        }

        .List.type-${ListStyle.BOX} li {
            position: relative;
            border-bottom: 1px solid ${Colors.inactive};
            padding: 0.1em ${Spacing.small};
            line-height: 1.4;
        }

        .List.type-${ListStyle.BOX} li:last-child {
            border-bottom: 0;
        }

        .List.type-${ListStyle.BOX} .active {
            font-weight: 800;
        }

        .List.type-${ListStyle.BOX} .active:before {
            content: "";
            position: absolute;
            top: 0;
            left: calc(-${Spacing.small} - 2px);
            width: ${Spacing.small};
            height: 100%;
            background: ${Colors.primary.active}
        }
      `}</style>
    </>
  );
};

export default List;
