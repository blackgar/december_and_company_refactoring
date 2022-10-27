import { useEffect, useRef, useState } from 'react';
import Button from '@atoms/Button/Button';
import Logo from '@atoms/Logo/Logo';
import {
  filterCloseButtonStyle,
  filterOpenButtonStyle,
  filterResetButtonStyle,
  filterSearchButtonStyle,
  filterSiderStyle,
} from '@common/styles/filterstyle';
import { logoStyle } from '@common/styles/logostyle';
import { filterCloseButtonIcon, filterOpenButtonIcon } from '@common/constants/icon';
import FilterSelect from '@molecules/FilterSelect/FilterSelect';
import MakeTag from '@atoms/MakeTag/MakeTag';
import { accountFilterList } from './../../../common/constants/filterlist';
import FilterOpenButton from '@atoms/FilterSlideButton/FilterSlideButton';
import FilterSlideButton from '@atoms/FilterSlideButton/FilterSlideButton';
import useMutation from '@hooks/useMutation';
import { useRecoilState } from 'recoil';
import { accountListAtom } from '@atom';
import { FilterProps } from '../../../common/types/Filter';

const Filter = ({ valueList, setFuncList }: FilterProps) => {
  const outside = useRef<any>();
  const [accounts, setAccounts] = useRecoilState(accountListAtom);
  // const [isActive, setIsActive] = useRecoilState(userIsActiveAtom);
  // const [isStaff, setIsStaff] = useRecoilState(userIsStaffAtom);
  const [open, setOpen] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  const removeFilter = () => {
    setAccounts(originalData);
  };
  const handlerOutside = (e: any) => {
    if (!outside.current.contains(e.target)) toggleSide();
  };
  const toggleSide = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutside);
    return () => {
      document.removeEventListener('mousedown', handlerOutside);
    };
  });
  return (
    <div ref={outside}>
      <FilterOpenButton setOpen={setOpen} open={open} style={filterOpenButtonStyle}>
        {filterOpenButtonIcon}정렬
      </FilterOpenButton>
      <div className={`${filterSiderStyle} ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <FilterSlideButton setOpen={setOpen} open={open} style={filterCloseButtonStyle}>
          {filterCloseButtonIcon}
        </FilterSlideButton>
        <div className={logoStyle}>
          <Logo />
          <MakeTag tagName="div">Filter</MakeTag>
        </div>
        <div className="my-16">
          {accountFilterList.map((v, i) => (
            <FilterSelect key={i} setFunc={setFuncList[i]} value={valueList[i]} values={v} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <MakeTag tagName="button" style={filterSearchButtonStyle} handleClick={''}>
            검색
          </MakeTag>
          <MakeTag tagName="button" style={filterResetButtonStyle} handleClick={removeFilter}>
            초기화
          </MakeTag>
          {/* <Button title="검색" style={filterSearchButtonStyle} />
          <Button title="초기화" style={filterResetButtonStyle} /> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
