interface LogoProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Logo({ imageSrc, imageAlt }: LogoProps) {
  return (
    <>
      <img className='logo' src={imageSrc} alt={imageAlt} />
    </>
  );
}
