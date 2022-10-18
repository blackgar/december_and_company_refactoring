import { ListContentProps } from '@common/types/List';
import TableBody from '@molecules/TableBody/TableBody';
import TableHeader from '@molecules/TableHeader/TableHeader';

const ListContent = ({ headerList, loading, data }: ListContentProps) => {
  return (
    <div className="p-1.5 w-full inline-block align-middle border rounded-lg overflow-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <TableHeader headerList={headerList!} />
        {loading ? <div>Loading...</div> : <TableBody data={data} />}
      </table>
    </div>
  );
};

export default ListContent;
