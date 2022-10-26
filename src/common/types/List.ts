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

export interface UserAccounts {
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

export interface UserSetting {
  id: number;
  uuid: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
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

export interface ListContentProps extends TableHeaderProps {
  data: AccountsMutation[] | UsersMutation[];
}

export interface TableHeaderProps {
  headerList: string[];
}

export interface TableHeaderItemProps {
  style: string;
  name: string;
}
export interface AccountTableDataProps {
  tableData: AccountsMutation;
}
export interface UserTableDataProps {
  tableData: UsersMutation;
  userAccountsData: UserAccounts[];
  userSettingData: UserSetting;
}

export interface TableBodyProps extends TableHeaderProps {
  tableData: any;
}

export interface TableBodyItemProps {
  name?: string | number | string[];
  children?: React.ReactNode;
  style?: string;
}
