import { accountsStatus } from '@common/constants/accountstatus';
import { brokerList } from '@common/constants/brokerlist';
import { makeComma, maskingAccountNumber } from '@utils/utils';
import { Link } from 'react-router-dom';
import { AccountTableDataProps } from '@common/types/List';
import { tableBodyLinkStyle, tableBodyStyle } from '@common/styles/tablestyle';
import TableBodyItem from '@atoms/TableBodyItem/TableBodyItem';

const AccountTableBody = ({ tableData }: AccountTableDataProps) => {
  return (
    <tr>
      <TableBodyItem style={`${tableBodyLinkStyle}`}>
        <Link to={`/users/${tableData.userId}`} state={{ user: tableData.user }}>
          {tableData.user.name}
        </Link>
      </TableBodyItem>
      <TableBodyItem name={brokerList[tableData.broker_id]} />
      <TableBodyItem style={`${tableBodyLinkStyle}`}>
        <Link to={`/account/${tableData.id}`}>{maskingAccountNumber(tableData.number)}</Link>
      </TableBodyItem>
      <TableBodyItem name={accountsStatus[tableData.status]} />
      <TableBodyItem name={tableData.name} />
      <TableBodyItem
        name={makeComma(tableData.assets)}
        style={`${tableBodyStyle} ${
          parseInt(tableData.assets) - parseInt(tableData.payments) > 0
            ? parseInt(tableData.assets) - parseInt(tableData.payments) === 0
              ? 'text-black'
              : 'text-red-700'
            : 'text-blue-700'
        }`}
      />
      <TableBodyItem name={makeComma(tableData.payments)} />
      <TableBodyItem name={tableData.is_active ? '활성화' : '비활성화'} />
      <TableBodyItem name={tableData.created_at.split('').slice(0, 10)} />
    </tr>
  );
};

export default AccountTableBody;
