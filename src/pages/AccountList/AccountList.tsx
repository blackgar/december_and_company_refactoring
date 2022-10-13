import { AccountsMutation } from '@common/types/List';
import useMutation from '@hooks/useMutation';
import { useState } from 'react';
import ListTemplate from '../../components/template/ListTemplate/ListTemplate';

const AccountList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [getAccounts, { data, loading }] = useMutation<AccountsMutation[]>(
    `/accounts?_expand=user&_page${page}&_limit=${limit}`
  );

  return (
    <ListTemplate
      title={'계좌'}
      getData={getAccounts}
      data={data!}
      loading={loading}
      page={page}
      setPage={setPage}
      limit={limit}
      setLimit={setLimit}
    />
  );
};

export default AccountList;
