import { FilterSelectProps } from '@common/types/Filter';

const FilterSelect = ({ setFunc, values }: FilterSelectProps) => {
  console.log(values);
  return (
    <div className="flex flex-col w-full mt-3 px-8">
      {' '}
      <label>{values.label}</label>
      <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFunc(e.target.value)}>
        {/* {values.options.map((v: any, i: any) => (
          <option key={i}>{v}</option>
        ))} */}
      </select>
    </div>
  );
};

export default FilterSelect;
