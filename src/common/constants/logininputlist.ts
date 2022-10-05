export const loginInputList = [
  {
    keyName: 'email',
    title: '이메일',
    placeholder: '이메일을 입력해주세요.',
    value: /^[a-zA-Z]+[!#$%&'*+-/=?^_`(){|}~]*[a-zA-Z0-9]*@[\w]+\.[a-zA-Z0-9-]+[.]*[a-zA-Z0-9]+$/,
    message: '이메일 형식을 지켜주세요.',
  },
  {
    keyName: 'password',
    title: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
    message: '8~16자의 영문 대 소문자, 숫자, 특수문자 조합만 사용 가능합니다.',
    maxLength: 16,
  },
];
