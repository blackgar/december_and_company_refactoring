import AccountDetail from '@pages/AccountDetail/AccountDetail';
import Accounts from '@pages/Accounts/Accounts';
import Login from '@pages/Login/Login';
import UserDetail from '@pages/UserDetail/UserDetail';
import Users from '@pages/Users/Users';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from './atoms';

const Router = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/accounts"
        element={userInfo?.accessToken ? <Accounts /> : <Navigate replace to="/" />}
      />
      <Route
        path="/account/:accountId"
        element={userInfo?.accessToken ? <AccountDetail /> : <Navigate replace to="/" />}
      />
      <Route
        path="/users"
        element={userInfo?.accessToken ? <Users /> : <Navigate replace to="/" />}
      />
      <Route
        path="/users/:userId"
        element={userInfo?.accessToken ? <UserDetail /> : <Navigate replace to="/" />}
      />
    </Routes>
  );
};

export default Router;
