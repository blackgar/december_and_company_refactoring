import { DataListProps } from '@common/types/List';

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
  return <div>{title} 목록 페이지</div>;
};

export default ListTemplate;
