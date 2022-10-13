import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfo',
  default: {
    accessToken: '',
    email: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const userListAtom = atom({
  key: 'userList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const accountListAtom = atom({
  key: 'accountList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
