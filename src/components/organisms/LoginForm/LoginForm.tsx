import Button from '@atoms/Button/Button';
import Title from '@atoms/Title/Title';
import { loginInputList } from '@common/constants/logininputlist';
import { LoginProps } from '@common/types/Login';
import LoginInput from '@molecules/Form/LoginInput';
import { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '@atom';

const LoginForm = ({ login, data }: LoginProps) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({ mode: 'onSubmit' });

  const onValid = (formData: FieldValues) => {
    login(formData);
  };

  useEffect(() => {
    if (data) {
      const { email } = getValues();
      setUserInfo({ accessToken: data.accessToken, email });
    }
  }, [data]);

  useEffect(() => {
    if (userInfo?.accessToken) {
      navigate('/accounts');
    }
  }, [userInfo]);

  return (
    <div>
      <div className="flex justify-center text-2xl mb-8 font-bold">
        <Title title={'로그인'} />
      </div>
      <div className="w-[25rem] border-2 border-black p-8 rounded-lg">
        <form onSubmit={handleSubmit(onValid)}>
          {loginInputList.map((formobj, index) => (
            <LoginInput key={index} formObject={formobj} register={register} errors={errors} />
          ))}
          <Button
            title={'로그인'}
            style={
              'flex w-full border-2 bg-slate-900 items-center justify-center p-3 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-500'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
