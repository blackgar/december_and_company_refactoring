import Button from '@atoms/Button/Button';
import { siderCloseButtonIcon, siderOpenButtonIcon } from '@common/constants/icon';
import { siderCloseButtonStyle, siderOpenButtonStyle, siderStyle } from '@common/styles/siderstyle';
import SiderHeader from '@molecules/SiderHeader/SiderHeader';
import SiderMenuList from '@molecules/SiderMenuList/SiderMenuList';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Sider = () => {
  const outside = useRef<any>();
  const [open, setOpen] = useState(false);
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
        <div
          className={`${siderOpenButtonStyle} ${open ? 'invisible' : 'visible'}`}
          onClick={() => setOpen(!open)}
        >
          {siderOpenButtonIcon}
        </div>
      </Button>
      <div className={`${siderStyle} ${open ? 'translate-x-0 ' : '-translate-x-full'}`}>
        <Button>
          <div className={siderCloseButtonStyle} onClick={() => setOpen(!open)}>
            {siderCloseButtonIcon}
          </div>
        </Button>
        <SiderHeader />
        <SiderMenuList />
      </div>
    </div>
  );
};

export default Sider;
