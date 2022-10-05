import { InputProps } from '@common/types/Login';

const Input = ({ formObject, register, style }: InputProps) => {
  return (
    <input
      type={formObject.keyName === 'password' ? 'password' : 'text'}
      {...register(formObject.keyName, {
        required: '필수 정보입니다',
        pattern: {
          value: formObject.value,
          message: formObject.message,
        },
      })}
      className={style}
      placeholder={formObject.placeholder}
      maxLength={formObject.maxLength ? formObject.maxLength : 100}
    />
  );
};

export default Input;
