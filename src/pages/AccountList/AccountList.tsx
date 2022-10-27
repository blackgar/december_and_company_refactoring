import { AccountsMutation } from '@common/types/List';
import useMutation from '@hooks/useMutation';
import { useState, useEffect } from 'react';
import ListTemplate from '@template/ListTemplate/ListTemplate';
import { accountHeaderList } from '../../common/constants/headerlist';
import { useRecoilState } from 'recoil';
import { accountListAtom } from '@atom';

const AccountList = () => {
  const [accounts, setAccounts] = useRecoilState(accountListAtom);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [broker, setBroker] = useState('');
  const [isActive, setIsActive] = useState('');
  const [status, setStatus] = useState('');
  const valueList = [broker, isActive, status];
  const setFuncList = [setBroker, setIsActive, setStatus];

  const [getAccounts, { data, loading }] = useMutation<AccountsMutation[]>(
    `/accounts?_expand=user&_page=${page}&_limit=${limit}`
  );
  const [searchAccounts, { data: searchData, loading: searchLoading }] = useMutation<
    AccountsMutation[]
  >(`/accounts?_expand=user&q=${query}`);
  const [filterAccounts, { data: filterData, loading: filterLoading }] = useMutation<
    AccountsMutation[]
  >(
    `/accounts?_expand=user${broker ? `&broker_id=${broker}` : ''}${
      isActive ? `&is_active=${isActive}` : ''
    }${status ? `&status=${status}` : ''}`
  );

  useEffect(() => {
    getAccounts();
  }, [page, limit]);

  useEffect(() => {
    if (data) setAccounts(data);
  }, [data]);

  useEffect(() => {
    if (searchData) setAccounts(searchData);
  }, [searchData]);

  useEffect(() => {
    if (filterData) setAccounts(filterData);
  }, [filterData]);

  return (
    <ListTemplate
      getSearchData={searchAccounts}
      getFilterData={filterAccounts}
      listData={accounts!}
      loading={loading}
      page={page}
      limit={limit}
      setQuery={setQuery}
      setPage={setPage}
      setLimit={setLimit}
      headerList={accountHeaderList}
      valueList={valueList}
      setFuncList={setFuncList}
    />
  );
};

export default AccountList;
