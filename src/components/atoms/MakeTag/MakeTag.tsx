import React, { SetStateAction, useEffect } from 'react';

// type MakeTagProps = React.PropsWithChildren<{
//   tagName: string;
//   setFunc?: SetStateAction<any>;
//   value?: string;
// }>;
interface MakeTagProps {
  tagName: string;
  style?: string;
  handleClick?: SetStateAction<any>;
  value?: boolean;
  children?: React.ReactNode;
}

const MakeTag = ({ tagName, style, handleClick, value, children }: MakeTagProps) => {
  return React.createElement(tagName, {
    className: style,
    onClick: () => handleClick(!value),
    value,
    children,
  });
};

export default MakeTag;
