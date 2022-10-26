import TableBodyItem from '@atoms/TableBodyItem/TableBodyItem';
import { tableBodyLinkStyle, tableBodyStyle } from '@common/styles/tablestyle';
import { UserTableDataProps } from '@common/types/List';
import { Link } from 'react-router-dom';
import { maskingPhoneNumber } from '../../../utils/utils';

const UserTableBody = ({ tableData, userAccountsData, userSettingData }: UserTableDataProps) => {
  return (
    <tr>
      <TableBodyItem style={tableBodyLinkStyle}>
        <Link to={`/user/${tableData.id}`} state={{ tableData, userAccountsData, userSettingData }}>
          {tableData.name}
        </Link>
      </TableBodyItem>
      <TableBodyItem name={userAccountsData.length} />
      <TableBodyItem name={tableData.email} />
      <TableBodyItem name={tableData.gender_origin} />
      <TableBodyItem name={tableData.birth_date.split('').slice(0, 10)} />
      <TableBodyItem name={maskingPhoneNumber(tableData.phone_number)} />
      <TableBodyItem name={tableData.last_login.split('').slice(0, 10)} />
      <TableBodyItem name={userSettingData.allow_marketing_push ? '동의' : '비동의'} />
      <TableBodyItem name={userSettingData.is_active ? '활성화' : '비활성화'} />
      <TableBodyItem name={tableData.created_at.split('').slice(0, 10)} />
    </tr>
  );
};

export default UserTableBody;
