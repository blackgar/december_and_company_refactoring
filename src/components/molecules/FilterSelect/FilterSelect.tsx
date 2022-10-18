import MakeTag from '@atoms/MakeTag/MakeTag';
import { FilterSelectProps } from '@common/types/Filter';
import FilterOption from '../../atoms/FilterOption/FilterOption';

const FilterSelect = ({ setFunc, value, values }: FilterSelectProps) => {
  return (
    <div className="flex flex-col w-full mt-3 px-8">
      <MakeTag
        tagName="label"
        style="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {values.label}
      </MakeTag>
      <select
        className="block p-2 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFunc(e.target.value)}
        value={value}
      >
        <option value="">-</option>
        {values.optionName.map((v: string, i: number) => (
          <FilterOption key={values.optionValue[i]} value={values.optionValue[i]} name={v} />
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
