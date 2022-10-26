import { ListContentProps } from '@common/types/List';
import TableBody from '@molecules/TableBody/TableBody';
import TableHeader from '@molecules/TableHeader/TableHeader';

const ListContent = ({ headerList, data }: ListContentProps) => {
  return (
    <div className="p-1.5 my-4 w-full inline-block align-middle border rounded-lg overflow-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <TableHeader headerList={headerList!} />
        {data.map((v, i) => (
          <TableBody key={i} tableData={v} headerList={headerList} />
        ))}
      </table>
    </div>
  );
};

export default ListContent;
