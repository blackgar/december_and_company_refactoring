import TableHeaderItem from '@atoms/TableHeaderItem/TableHeaderItem';
import { tableHeaderItemStyle, tableHeaderStyle } from '@common/styles/tablestyle';
import { TableHeaderProps } from '@common/types/List';

const TableHeader = ({ headerList }: TableHeaderProps) => {
  return (
    <thead className={tableHeaderStyle}>
      <tr>
        {headerList.map((v, i) => (
          <TableHeaderItem key={i} style={tableHeaderItemStyle} name={v} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
