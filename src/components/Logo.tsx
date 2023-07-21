import cat1 from '../assets/images/cat1.avif';

interface LogoProps {
  image: string;
}

//TODO: настроить выбор фоточек из props
function Logo({ image }: LogoProps) {
  const imageSource = cat1;

  return (
    <>
      <img className='logo' src={cat1} alt={image} />
    </>
  );
}

export default Logo;
