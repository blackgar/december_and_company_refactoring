import Sider from '@organisms/Sider/Sider';
import AccountDetail from '@pages/AccountDetail/AccountDetail';
import AccountList from '@pages/AccountList/AccountList';
import Login from '@pages/Login/Login';
import UserDetail from '@pages/UserDetail/UserDetail';
import UserList from '@pages/UserList/UserList';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@atom';
import Header from '@organisms/Header/Header';

const Router = () => {
  const { pathname } = useLocation();
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <div>
      {pathname === '/' ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <div className="ml-20 border-l-2 border-gray-300">
          <Sider />
          <Header path={pathname} />
          <Routes>
            <Route
              path="/accounts"
              element={userInfo?.accessToken ? <AccountList /> : <Navigate replace to="/" />}
            />
            <Route
              path="/account/:accountId"
              element={userInfo?.accessToken ? <AccountDetail /> : <Navigate replace to="/" />}
            />
            <Route
              path="/users"
              element={userInfo?.accessToken ? <UserList /> : <Navigate replace to="/" />}
            />
            <Route
              path="/users/:userId"
              element={userInfo?.accessToken ? <UserDetail /> : <Navigate replace to="/" />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Router;
