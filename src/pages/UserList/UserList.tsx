import { userListAtom } from '@atom';
import { userHeaderList } from '@common/constants/headerlist';
import { UsersMutation } from '@common/types/List';
import useMutation from '@hooks/useMutation';
import { ListTemplate } from '@template/index';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const UserList = () => {
  const [users, setUsers] = useRecoilState(userListAtom);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const valueList = [isActive, isStaff];
  const setFuncList = [setIsActive, setIsStaff];
  const [getUsers, { data, loading }] = useMutation<UsersMutation[]>(
    `/users?_page=${page}&_limit=${limit}`
  );
  const [searchUsers, { data: searchData, loading: searchLoading }] = useMutation<UsersMutation>(
    `/users?q=${query}`
  );

  useEffect(() => {
    getUsers();
  }, [page, limit]);

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  useEffect(() => {
    if (searchData) setUsers(searchData);
  }, [searchData]);

  return (
    <ListTemplate
      getSearchData={searchUsers}
      listData={users!}
      loading={loading}
      page={page}
      limit={limit}
      setQuery={setQuery}
      setPage={setPage}
      setLimit={setLimit}
      headerList={userHeaderList}
      valueList={valueList}
      setFuncList={setFuncList}
    />
  );
};

export default UserList;
