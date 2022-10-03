import Logo from '@atoms/Logo/Logo';
import Title from '@atoms/Title/Title';
import { LoginProps } from '@common/types/Login';
import LoginForm from '@organisms/LoginForm/LoginForm';

const LoginTemplate = ({ login, data }: LoginProps) => {
  return (
    <div className="mt-32">
      <div className="flex justify-center items-center gap-2 text-4xl font-bold">
        <Logo />
        <Title title={'PREFACE'} />
      </div>
      <div className="flex justify-center items-center mt-8">
        <LoginForm login={login} data={data} />
      </div>
    </div>
  );
};

export default LoginTemplate;
