interface LogoProps {
  imageSrc: string;
  imageAlt: string;
}

//TODO: настроить выбор фоточек из props
function Logo({ imageSrc, imageAlt }: LogoProps) {
  return (
    <>
      <img className='logo' src={imageSrc} alt={imageAlt} />
    </>
  );
}

export default Logo;
