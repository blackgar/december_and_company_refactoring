import { DataListProps } from '@common/types/List';
import Pagination from '@molecules/Pagination/Pagination';
import ListContent from '@organisms/ListContent/ListContent';
import ListHeader from '@organisms/ListHeader/ListHeader';

const ListTemplate = ({
  title,
  getData,
  data,
  loading,
  page,
  limit,
  setPage,
  setLimit,
}: DataListProps) => {
  return (
    <div className="w-full bg-gray-100 h-screen p-8">
      <ListHeader />
      <ListContent />
      <Pagination />
    </div>
  );
};

export default ListTemplate;
