import { userInfoAtom } from '@atom';
import MakeTag from '@atoms/MakeTag/MakeTag';
import { headerStyle } from '@common/styles/headerstyle';
import { getKeyByValue } from '@utils/utils';
import { useRecoilValue } from 'recoil';
import { pathList } from './../../../common/constants/pathlist';
interface HeaderProps {
  path: string;
}
const Header = ({ path }: HeaderProps) => {
  const userInfo = useRecoilValue(userInfoAtom);
  // 추후 accountList, userList 데이터를 atom에 저장한다음에 현재 url query로 들어온 ID 값을 요청 보내서 pathname에 따른 000계좌 정보, 000님 정보 등으로 표시할 수 있도록 한다.
  return (
    <div className={headerStyle}>
      <MakeTag tagName="div" style={'text-2xl font-bold'}>
        {getKeyByValue(pathList, path)!}
      </MakeTag>
      <MakeTag tagName="div">{userInfo.email}</MakeTag>
    </div>
  );
};

export default Header;
