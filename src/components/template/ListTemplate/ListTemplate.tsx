import { DataListProps } from '@common/types/List';
import Pagination from '@molecules/Pagination/Pagination';
import ListContent from '@organisms/ListContent/ListContent';
import ListHeader from '@organisms/ListHeader/ListHeader';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accountListAtom } from '@atom';

const ListTemplate = ({
  getSearchData,
  listData,
  loading,
  page,
  limit,
  setQuery,
  setPage,
  setLimit,
  headerList,
  valueList,
  setFuncList,
}: DataListProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listData]);

  return (
    <div className="w-full bg-gray-100 min-h-screen h-[100%] p-8">
      <ListHeader
        limit={limit}
        setLimit={setLimit}
        setPage={setPage}
        getSearchData={getSearchData}
        setQuery={setQuery}
        valueList={valueList}
        setFuncList={setFuncList}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ListContent headerList={headerList} listData={listData} />
          <Pagination page={page} setPage={setPage} limit={limit} listData={listData} />
        </>
      )}
    </div>
  );
};

export default ListTemplate;
