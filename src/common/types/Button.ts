import { SetStateAction } from 'react';

export interface ButtonProps {
  title?: string;
  style?: string;
  children?: React.ReactNode;
  setFunc?: SetStateAction<any>;
}
