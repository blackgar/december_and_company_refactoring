const Logo = () => {
  return (
    <div className="w-12 h-12">
      <img src={process.env.PUBLIC_URL + `/DAC.png`} alt="" />
    </div>
  );
};

export default Logo;
