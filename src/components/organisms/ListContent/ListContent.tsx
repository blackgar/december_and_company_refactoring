import { tableListStyle, tableStyle } from '@common/styles/tablestyle';
import { ListContentProps } from '@common/types/List';
import TableBody from '@molecules/TableBody/TableBody';
import TableHeader from '@molecules/TableHeader/TableHeader';

const ListContent = ({ headerList, listData }: ListContentProps) => {
  return (
    <div className={tableListStyle}>
      <table className={tableStyle}>
        <TableHeader headerList={headerList!} />
        {listData.map((v, i) => (
          <TableBody key={i} tableData={v} headerList={headerList} />
        ))}
      </table>
    </div>
  );
};

export default ListContent;
