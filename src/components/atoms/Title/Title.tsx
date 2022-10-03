import { TitleProps } from '@common/types/Title';

const Title = ({ title, style }: TitleProps) => {
  return <div className={style}>{title}</div>;
};

export default Title;
