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
  // useEffect(() => {
  //   getData();
  // }, [page]);
  // console.log(page, data);

  return (
    <div className="w-full bg-gray-100 h-screen p-8">
      <ListHeader />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ListContent headerList={headerList} data={data} />
          <Pagination page={page} setPage={setPage} data={data} />
        </>
      )}
    </div>
  );
};

export default ListTemplate;
