import TableHeaderItem from '@atoms/TableHeaderItem/TableHeaderItem';
import { tableHeaderStyle } from '@common/styles/tablestyle';
import { TableHeaderProps } from '@common/types/List';

const TableHeader = ({ headerList }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {headerList.map((v, i) => (
          <TableHeaderItem key={i} style={tableHeaderStyle} name={v} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
