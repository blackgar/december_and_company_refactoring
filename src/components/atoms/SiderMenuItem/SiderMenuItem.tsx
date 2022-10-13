import { ButtonProps } from '@common/types/Button';

const SiderMenuItem = ({ title, children }: ButtonProps) => {
  return (
    <button className="flex gap-4 items-center">
      {children}
      {title}
    </button>
  );
};

export default SiderMenuItem;
