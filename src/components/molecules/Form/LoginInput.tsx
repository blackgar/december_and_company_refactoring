import ErrorMessage from '@atoms/ErrorMessage/ErrorMessage';
import Input from '@atoms/Input/Input';
import MakeTag from '@atoms/MakeTag/MakeTag';
import { loginInputStyle } from '@common/styles/inputstyle';
import { FormProps } from '@common/types/Login';

const LoginInput = ({ formObject, register, errors }: FormProps) => {
  const errorMessage = `${
    errors[formObject.keyName] ? errors?.[formObject.keyName]?.message : formObject.message
  }`;
  return (
    <div className="flex flex-col mb-4">
      <MakeTag tagName="div" style={'font-bold my-1'}>
        {formObject.title}
      </MakeTag>
      <Input formObject={formObject} register={register} style={loginInputStyle} errors={errors} />
      {Object.keys(errors).includes(formObject.keyName) ? (
        <ErrorMessage title={errorMessage} />
      ) : (
        ''
      )}
    </div>
  );
};

export default LoginInput;
