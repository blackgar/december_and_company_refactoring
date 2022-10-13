import { FormEventHandler, SetStateAction } from 'react';

export interface SearchProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  setFunc: SetStateAction<any>;
}
