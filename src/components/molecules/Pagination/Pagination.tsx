import Button from '@atoms/Button/Button';
import PaginationPage from '@atoms/PaginationPage/PaginationPage';
import { PaginationProps } from '@common/types/Pagination';
import { paginationNextButtonStyle, paginationPrevButtonStyle } from '@common/styles/pagination';

const Pagination = ({ page, data, limit, setPage }: PaginationProps) => {
  const getLastPage = () => {
    if (page === 1) {
      alert('가장 첫 페이지입니다.');
      return;
    }
    setPage((prev: number) => prev - 1);
  };
  const getNextPage = () => {
    if (data.length < limit) {
      alert('마지막 페이지입니다.');
      return;
    }
    setPage((prev: number) => prev + 1);
  };

  return (
    <div className="text-center">
      <PaginationPage page={page} limit={limit} dataLength={data.length} />
      <div>
        <Button title={'Prev'} style={paginationPrevButtonStyle} setFunc={getLastPage} />
        <Button title={'Next'} style={paginationNextButtonStyle} setFunc={getNextPage} />
      </div>
    </div>
  );
};

export default Pagination;
