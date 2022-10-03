import { LoginMutation } from '@common/types/Login';
import { LoginTemplate } from '@components/template';
import useMutation from '@hooks/useMutation';

const Login = () => {
  const [login, { data }] = useMutation<LoginMutation>(`/login`);
  return <LoginTemplate login={login} data={data!} />;
};

export default Login;
