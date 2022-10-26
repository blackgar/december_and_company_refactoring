import { tableBodyStyle } from '@common/styles/tablestyle';
import { TableBodyItemProps } from '@common/types/List';

const TableBodyItem = ({ name, style, children }: TableBodyItemProps) => {
  return (
    <td className={style ? style : tableBodyStyle}>
      {name}
      {children}
    </td>
  );
};

export default TableBodyItem;
