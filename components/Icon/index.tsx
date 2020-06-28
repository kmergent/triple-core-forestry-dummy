import * as React from "react";
import classNames from "classnames";

interface Props {
  name: string;
  color?: string; 
}

const Icon: React.FC<Props> = ({ name, color = "" }) => (
  <>
    <span className={classNames("Icon", "icon-" + name)}></span>
    <style jsx>{`
      .Icon {
        display: inline-block;
        font-size: 1.1rem;
        color: ${color|| 'inherit'};
      }
      .Icon:before {
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
      }
    `}</style>
  </>
);

export default Icon;
