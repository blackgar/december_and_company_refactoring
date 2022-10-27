import { filterPageNumberStyle } from '@common/styles/filterstyle';
import { ListHeaderSelectPageNumberProps } from '@common/types/List';
import { useState } from 'react';

const SelectPageNumber = ({ limit, setLimit, setPage }: ListHeaderSelectPageNumberProps) => {
  const onSelectPageNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
    setPage(1);
  };
  return (
    <select onChange={onSelectPageNumber} value={limit} className={filterPageNumberStyle}>
      <option value={10}>10개씩 보기</option>
      <option value={20}>20개씩 보기</option>
      <option value={50}>50개씩 보기</option>
      <option value={100}>100개씩 보기</option>
    </select>
  );
};

export default SelectPageNumber;
