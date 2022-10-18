import Logo from '@atoms/Logo/Logo';
import MakeTag from '@atoms/MakeTag/MakeTag';
import { logoStyle } from '@common/styles/logostyle';
import { LoginProps } from '@common/types/Login';
import LoginForm from '@organisms/LoginForm/LoginForm';

const LoginTemplate = ({ login, data }: LoginProps) => {
  return (
    <div>
      <div className={logoStyle}>
        <Logo />
        <MakeTag tagName="div">PREFACE</MakeTag>
      </div>
      <div className="flex justify-center items-center mt-8">
        <LoginForm login={login} data={data} />
      </div>
    </div>
  );
};

export default LoginTemplate;
