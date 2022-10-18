import { DataListProps } from '@common/types/List';
import Pagination from '@molecules/Pagination/Pagination';
import ListContent from '@organisms/ListContent/ListContent';
import ListHeader from '@organisms/ListHeader/ListHeader';
import { useEffect } from 'react';

const ListTemplate = ({
  getData,
  data,
  loading,
  page,
  limit,
  setPage,
  setLimit,
  headerList,
}: DataListProps) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-gray-100 h-screen p-8">
      <ListHeader />
      <ListContent headerList={headerList} loading={loading} data={data} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default ListTemplate;
