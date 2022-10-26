import { userHeaderList } from '@common/constants/headerlist';
import { UsersMutation } from '@common/types/List';
import useMutation from '@hooks/useMutation';
import { ListTemplate } from '@template/index';
import { useState } from 'react';

const UserList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [getUsers, { data, loading }] = useMutation<UsersMutation[]>(
    `/users?_page=${page}&_limit=${limit}`
  );
  return (
    <ListTemplate
      getData={getUsers}
      data={data!}
      loading={loading}
      page={page}
      setPage={setPage}
      limit={limit}
      setLimit={setLimit}
      headerList={userHeaderList}
    />
  );
};

export default UserList;
