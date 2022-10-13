import { brokerList } from './brokerlist';

export const accountFilterList = [
  {
    label: '브로커명',
    options: [{ '-': '' }, brokerList],
  },
  {
    label: '계좌 활성화 여부',
    options: [{ '-': '' }, { 활성화: 'true' }, { 비활성화: 'false' }],
  },
  {
    label: '계좌 활성화 여부',
    options: [{ '-': '' }, { 활성화: 'true' }, { 비활성화: 'false' }],
  },
];

export const userFilterList = [];
