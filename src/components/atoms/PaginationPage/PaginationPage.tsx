import { PaginationPageProps } from '@common/types/Pagination';

const PaginationPage = ({ page, dataLength }: PaginationPageProps) => {
  return (
    <span className={`text-sm text-gray-700 dark:text-gray-400`}>
      Showing <span className={`font-semibold text-gray-900`}>{10 * (page - 1) + 1}</span> to{' '}
      <span className={`font-semibold text-gray-900`}>{10 * (page - 1) + dataLength}</span>
    </span>
  );
};

export default PaginationPage;
