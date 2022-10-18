import SearchBar from '@molecules/SearchBar/SearchBar';
import Filter from '@organisms/Filter/Filter';
const ListHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <Filter />
    </div>
  );
};

export default ListHeader;
