import Logo from '@atoms/Logo/Logo';
import Title from '@atoms/Title/Title';
import { logoStyle } from '@common/styles/logostyle';
import { LoginProps } from '@common/types/Login';
import LoginForm from '@organisms/LoginForm/LoginForm';

const LoginTemplate = ({ login, data }: LoginProps) => {
  return (
    <div>
      <div className={logoStyle}>
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
