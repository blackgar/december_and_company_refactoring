import { TableHeaderItemProps } from '../../../common/types/List';

const TableHeaderItem = ({ style, name }: TableHeaderItemProps) => {
  return (
    <th scope="col" className={style}>
      {name}
    </th>
  );
};

export default TableHeaderItem;
