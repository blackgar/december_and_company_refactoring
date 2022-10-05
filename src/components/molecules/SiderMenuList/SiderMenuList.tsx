import SiderMenuItem from '@atoms/SiderMenuItem/SiderMenuItem';
import { siderIconList } from '@common/constants/icon';
import { SiderIcon } from '@common/types/Sider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accountListAtom, userInfoAtom, userListAtom } from '@atom';

const SiderMenuList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [accessToken, setAccessToken] = useRecoilState(userInfoAtom);
  const [accounts, setAccounts] = useRecoilState(accountListAtom);
  const [users, setUsers] = useRecoilState(userListAtom);
  const logout = () => {
    setAccessToken({
      accessToken: '',
      email: '',
    });
    setAccounts([]);
    setUsers([]);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-16">
      {siderIconList.map((v: SiderIcon, i: number) => (
        <div
          key={i}
          className={`flex w-[70%] h-12 text-left mb-2 gap-4 p-2 rounded hover:bg-sky-500 cursor-pointer ${
            pathname === v.path ? 'bg-sky-500' : ''
          }`}
          onClick={() => {
            return v.path ? navigate(v.path!) : logout();
          }}
        >
          <SiderMenuItem title={v.title}>{v.svg}</SiderMenuItem>
        </div>
      ))}
    </div>
  );
};

export default SiderMenuList;
