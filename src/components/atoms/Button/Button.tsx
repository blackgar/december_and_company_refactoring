import { ButtonProps } from '@common/types/Button';

const Button = ({ title, style, children }: ButtonProps) => {
  return (
    <button className={style}>
      {children}
      {title}
    </button>
  );
};

export default Button;
