interface LogoProps {
  imageSrc: string;
  imageAlt: string;
}

function Logo({ imageSrc, imageAlt }: LogoProps) {
  return (
    <>
      <img className='logo' src={imageSrc} alt={imageAlt} />
    </>
  );
}

export default Logo;
