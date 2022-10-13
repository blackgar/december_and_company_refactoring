import { useEffect, useRef, useState } from 'react';
import Button from '@atoms/Button/Button';
import Logo from '@atoms/Logo/Logo';
import Title from '@atoms/Title/Title';
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

const Filter = () => {
  const outside = useRef<any>();
  const [open, setOpen] = useState(false);
  const [broker, setBroker] = useState('');
  const [isActive, setIsActive] = useState('');
  const [status, setStatus] = useState('');
  const setFuncList = [setBroker, setIsActive, setStatus];
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
      <Button>
        <div className={filterOpenButtonStyle} onClick={() => setOpen(!open)}>
          {filterOpenButtonIcon}
          <div className="hidden sm:block">정렬</div>
        </div>
      </Button>
      <div className={`${filterSiderStyle} ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <Button>
          <div className={filterCloseButtonStyle} onClick={() => setOpen(!open)}>
            {filterCloseButtonIcon}
          </div>
        </Button>
        <div className={logoStyle}>
          <Logo />
          <Title title={'FILTER'} />
        </div>
        <div>
          {accountFilterList.map((v, i) => (
            <FilterSelect setFunc={setFuncList[i]} values={v} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Button title="검색" style={filterSearchButtonStyle} />
          <Button title="초기화" style={filterResetButtonStyle} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
