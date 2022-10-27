import { SetStateAction } from 'react';
import { AccountsMutation, UsersMutation } from './List';

export interface PaginationProps {
  page: number;
  limit: number;
  setPage: SetStateAction<any>;
  listData: AccountsMutation[] | UsersMutation[];
}

export interface PaginationPageProps {
  page: number;
  limit: number;
  dataLength: number;
}
