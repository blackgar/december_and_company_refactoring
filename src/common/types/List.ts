import { SetStateAction } from 'react';

export interface UsersMutation {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}

export interface AccountsMutation {
  id: number;
  userId: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user: UsersMutation;
}

export interface DataListProps {
  getData: (data?: any) => void;
  data: AccountsMutation[] | UsersMutation[];
  loading: boolean;
  page: number;
  setPage: SetStateAction<any>;
  limit: number;
  setLimit: SetStateAction<any>;
  headerList: string[];
}

export interface ListContentProps extends TableHeaderProps, TableBodyProps {
  loading: boolean;
}

export interface TableHeaderProps {
  headerList: string[];
}

export interface TableHeaderItemProps {
  style: string;
  name: string;
}

export interface TableBodyProps {
  data: AccountsMutation[] | UsersMutation[];
}

export interface PaginationProps {
  page: number;
  setPage: SetStateAction<any>;
}
