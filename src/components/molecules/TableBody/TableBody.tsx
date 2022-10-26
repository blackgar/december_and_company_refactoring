import AccountTableBody from '@molecules/AccountTableBody/AccountTableBody';
import UserTableBody from '@molecules/UserTableBody/UserTableBody';
import useMutation from '@hooks/useMutation';
import { TableBodyProps } from '../../../common/types/List';
import { useEffect } from 'react';
import { tableBodyStyle } from '@common/styles/tablestyle';

const TableBody = ({ tableData, headerList }: TableBodyProps) => {
  const [getUserSetting, { data: userSettingData, loading: userSetttingLoading }] = useMutation(
    `/userSetting?uuid=${tableData.uuid}`
  );
  const [getUserAccounts, { data: userAccountsData, loading: userAccountLoading }] = useMutation(
    `/accounts?_expand=user&userId=${tableData.id}`
  );

  useEffect(() => {
    if (userSettingData) return;
    getUserSetting();
  }, [userSettingData]);

  useEffect(() => {
    if (userAccountsData) return;
    getUserAccounts();
  }, [userAccountsData]);

  return (
    <tbody className={tableBodyStyle}>
      {headerList.includes('브로커명') ? (
        <AccountTableBody tableData={tableData} />
      ) : userAccountLoading || userSetttingLoading ? (
        <tr>
          <td>Loading...</td>
        </tr>
      ) : (
        <UserTableBody
          tableData={tableData}
          userAccountsData={userAccountsData}
          userSettingData={userSettingData}
        />
      )}
    </tbody>
  );
};

export default TableBody;
