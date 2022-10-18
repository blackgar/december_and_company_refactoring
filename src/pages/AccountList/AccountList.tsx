import { AccountsMutation } from '@common/types/List';
import useMutation from '@hooks/useMutation';
import { useState } from 'react';
import ListTemplate from '@template/ListTemplate/ListTemplate';
import { accountHeaderList } from '../../common/constants/headerlist';
import { useRecoilState } from 'recoil';
import { accountListAtom } from '@atom';

const AccountList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [getAccounts, { data, loading }] = useMutation<AccountsMutation[]>(
    `/accounts?_expand=user&_page${page}&_limit=${limit}`
  );

  return (
    <ListTemplate
      getData={getAccounts}
      data={data!}
      loading={loading}
      page={page}
      setPage={setPage}
      limit={limit}
      setLimit={setLimit}
      headerList={accountHeaderList}
    />
  );
};

export default AccountList;
