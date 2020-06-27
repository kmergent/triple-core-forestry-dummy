import * as React from "react";

interface Props {
  forType: string;
  children: React.ReactNode;
}

const Subline: React.FC<Props> = ({ forType, children }) => (
  <>
  <p className={"Subline type-" + forType}>{children}</p>
  <style jsx>{`
    .Subline {
      font-weight: lighter;
    }
    .Subline.type-h1 {
      font-size: 1.37rem;
      margin-top: -0.7rem;
      margin-bottom: 1.75rem;
    }

    .Subline.type-h2 {
      font-size: 1.13rem;
      margin-top: -0.2rem;
      margin-bottom: 1.1rem;
    }
  `}</style>
  </>
);

export default Subline;
