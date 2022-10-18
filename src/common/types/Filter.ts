import { ReactNode, SetStateAction } from 'react';

interface FilterOption {
  label: string;
  optionName: string[];
  optionValue: string[];
}

export interface FilterSelectProps {
  setFunc: SetStateAction<any>;
  value: string;
  values: FilterOption;
}

export interface FilterOptionProps {
  value: string;
  name: string;
}

export interface FilterOpenButtonProps {
  setOpen: SetStateAction<any>;
  open: boolean;
  style: string;
  children?: React.ReactNode;
}
