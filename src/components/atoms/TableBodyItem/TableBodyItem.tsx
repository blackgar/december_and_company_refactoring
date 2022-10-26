import { tableBodyItemStyle } from '@common/styles/tablestyle';
import { TableBodyItemProps } from '@common/types/List';

const TableBodyItem = ({ name, style, children }: TableBodyItemProps) => {
  return (
    <td className={style ? style : tableBodyItemStyle}>
      {name}
      {children}
    </td>
  );
};

export default TableBodyItem;
