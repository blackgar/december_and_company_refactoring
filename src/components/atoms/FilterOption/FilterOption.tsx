import { FilterOptionProps } from '@common/types/Filter';

const FilterOption = ({ value, name }: FilterOptionProps) => {
  return <option value={value}>{name}</option>;
};

export default FilterOption;
