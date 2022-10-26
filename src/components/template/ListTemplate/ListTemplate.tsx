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
  }, [page, limit]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="w-full bg-gray-100 min-h-screen h-[100%] p-8">
      <ListHeader limit={limit} setLimit={setLimit} setPage={setPage} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ListContent headerList={headerList} data={data} />
          <Pagination page={page} setPage={setPage} limit={limit} data={data} />
        </>
      )}
    </div>
  );
};

export default ListTemplate;
