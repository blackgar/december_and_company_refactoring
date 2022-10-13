import Logo from '@atoms/Logo/Logo';
import Title from '@atoms/Title/Title';

const SiderHeader = () => {
  return (
    <div className="flex justify-center items-center gap-4 font-bold text-4xl mt-24">
      <Logo />
      <Title title={'PREFACE'} />
    </div>
  );
};

export default SiderHeader;
