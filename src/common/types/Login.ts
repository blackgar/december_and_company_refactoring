import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

export interface LoginMutation {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginProps {
  login: (data?: any) => void;
  data: LoginMutation;
}

export interface FormObject {
  keyName: string;
  title: string;
  placeholder: string;
  value: RegExp;
  message: string;
  maxLength?: number;
}

export interface FormProps {
  formObject: FormObject;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
}

export interface InputProps extends FormProps {
  style: string;
}
