import ErrorMessage from '@atoms/ErrorMessage/ErrorMessage';
import Input from '@atoms/Input/Input';
import Title from '@atoms/Title/Title';
import { loginInputStyle } from '@common/styles/input';
import { FormProps } from '@common/types/Login';

const LoginInput = ({ formObject, register, errors }: FormProps) => {
  return (
    <div className="flex flex-col mb-4">
      <Title title={formObject.title} style={'font-bold my-1'} />
      <Input formObject={formObject} register={register} style={loginInputStyle} errors={errors} />
      {Object.keys(errors).includes(formObject.keyName) ? (
        <ErrorMessage title={formObject.message} />
      ) : (
        ''
      )}
    </div>
  );
};

export default LoginInput;
