import { ListHeaderProps } from '@common/types/List';
import SearchBar from '@molecules/SearchBar/SearchBar';
import Filter from '@organisms/Filter/Filter';
import SelectPageNumber from '@molecules/SelectPageNumber/SelectPageNumber';
const ListHeader = ({
  limit,
  setLimit,
  setPage,
  getSearchData,
  setQuery,
  valueList,
  setFuncList,
}: ListHeaderProps) => {
  return (
    <div className="flex justify-between">
      <SearchBar getSearchData={getSearchData} setQuery={setQuery} />
      <div className="flex">
        <SelectPageNumber limit={limit} setLimit={setLimit} setPage={setPage} />
        <Filter valueList={valueList} setFuncList={setFuncList} />
      </div>
    </div>
  );
};

export default ListHeader;
