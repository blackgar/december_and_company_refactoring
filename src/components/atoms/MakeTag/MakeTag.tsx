import React, { SetStateAction, useEffect } from 'react';

// type MakeTagProps = React.PropsWithChildren<{
//   tagName: string;
//   setFunc?: SetStateAction<any>;
//   value?: string;
// }>;
interface MakeTagProps {
  tagName: string;
  style?: string;
  setState?: SetStateAction<any>;
  value?: string;
  children?: React.ReactNode;
}

const MakeTag = ({ tagName, style, setState, value, children }: MakeTagProps) => {
  return React.createElement(tagName, {
    className: style,
    onChange: (e: any) => setState(e.target.value),
    value,
    children,
  });
};

export default MakeTag;
