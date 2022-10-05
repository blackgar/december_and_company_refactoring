import Button from '@atoms/Button/Button';
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
        <svg
          onClick={() => setOpen(!open)}
          className={`fixed z-30 flex items-center cursor-pointer left-6 top-6 ${
            open ? 'invisible' : 'visible'
          }`}
          fill="#041527"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="70" height="10"></rect>
          <rect y="20" width="70" height="10"></rect>
          <rect y="40" width="70" height="10"></rect>
        </svg>
      </Button>
      <div
        className={`fixed top-0 left-0 w-[20rem] h-screen bg-slate-900 text-white z-40 ease-in-out duration-300 ${
          open ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex fixed top-5 left-[17.5rem] items-center text-center cursor-pointer w-7 h-7"
            onClick={() => setOpen(!open)}
          >
            <path
              fillRule="evenodd"
              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <SiderHeader />
        <SiderMenuList />
      </div>
    </div>
  );
};

export default Sider;
