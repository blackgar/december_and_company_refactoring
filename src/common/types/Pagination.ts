import { SetStateAction } from 'react';
import { AccountsMutation, UsersMutation } from './List';

export interface PaginationProps {
  page: number;
  data: AccountsMutation[] | UsersMutation[];
  setPage: SetStateAction<any>;
}

export interface PaginationPageProps {
  page: number;
  dataLength: number;
}
