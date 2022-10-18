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
import FilterOpenButton from '@atoms/FilterOpenButton/FilterOpenButton';
import FilterSlideButton from '@atoms/FilterOpenButton/FilterOpenButton';
import useMutation from '@hooks/useMutation';
import { useRecoilState } from 'recoil';
import { accountListAtom } from '@atom';

const Filter = () => {
  const outside = useRef<any>();
  const [accounts, setAccounts] = useRecoilState(accountListAtom);
  const [open, setOpen] = useState(false);
  const [broker, setBroker] = useState('');
  const [isActive, setIsActive] = useState('');
  const [status, setStatus] = useState('');
  const [originalData, setOriginalData] = useState([]);
  const valueList = [broker, isActive, status];
  const setFuncList = [setBroker, setIsActive, setStatus];
  const [filterAccounts, { data }] = useMutation<any>(
    `/accounts?_expand=user${broker ? `&broker_id=${broker}` : ''}${
      isActive ? `&is_active=${isActive}` : ''
    }${status ? `&status=${status}` : ''}`
  );
  const filteringAccounts = () => {
    filterAccounts();
  };
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
    if (data) {
      setAccounts(data);
      return;
    }
    setOriginalData(accounts);
  }, [data]);

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
          <MakeTag tagName="button" style={filterSearchButtonStyle} handleClick={filteringAccounts}>
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
