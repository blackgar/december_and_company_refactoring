import { PaginationPageProps } from '@common/types/Pagination';

const PaginationPage = ({ page, limit, dataLength }: PaginationPageProps) => {
  return (
    <span className={`text-sm text-gray-700 dark:text-gray-400`}>
      Showing <span className={`font-semibold text-gray-900`}>{limit * (page - 1) + 1}</span> to{' '}
      <span className={`font-semibold text-gray-900`}>{limit * (page - 1) + dataLength}</span>
    </span>
  );
};

export default PaginationPage;
