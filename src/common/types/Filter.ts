import { SetStateAction } from 'react';

interface FilterOption {
  label: string;
  options: any;
}

export interface FilterSelectProps {
  setFunc: SetStateAction<any>;
  values: FilterOption;
}
