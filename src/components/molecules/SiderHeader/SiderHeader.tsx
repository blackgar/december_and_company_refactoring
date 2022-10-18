import Logo from '@atoms/Logo/Logo';
import MakeTag from '@atoms/MakeTag/MakeTag';

const SiderHeader = () => {
  return (
    <div className="flex justify-center items-center gap-4 font-bold text-4xl mt-24">
      <Logo />
      <MakeTag tagName="div">PREFACE</MakeTag>
    </div>
  );
};

export default SiderHeader;
