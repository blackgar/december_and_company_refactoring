import { TitleProps } from '@common/types/Title';

const ErrorMessage = ({ title, style }: TitleProps) => {
  return <span className="text-xs text-red-500">{title}</span>;
};

export default ErrorMessage;
