import { ButtonProps } from '@common/types/Button';

const Button = ({ title, style, setFunc, children }: ButtonProps) => {
  return (
    <button className={style} onClick={setFunc}>
      {children}
      {title}
    </button>
  );
};

export default Button;
