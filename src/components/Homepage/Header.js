import HeaderBg from "../../assets/HeroGraphics.svg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <header className="pt-20 -mt-20 md:pt-24 md:-mt-28 lg:pt-40 lg:-mt-32 flex flex-wrap md:flex-nowrap gap-5 md:gap-1 px-4 md:px-32 items-center bg-no-repeat bg-right-top bg-[url('https://res.cloudinary.com/eleczra/image/upload/v1690553358/headerBg_w4jnqt.svg')]">
      <div data-aos="fade-up-right" className='w-full md:w-1/2 md:pt-16'>
        <h1 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose mb-8'>
          Save time by building fast with Boldo Template{" "}
        </h1>
        <p className='mb-6 md:mb-20 text-brand-gray leading-7'>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className='flex flex-wrap md:flex-nowrap items-center gap-3'>
          <Button className='px-14 text-white bg-darkBlue hover:opacity-90'>
            Buy template
          </Button>
          <Button className='border-2 border-darkBlue text-darkBlue px-14 bg-transparent hover:bg-darkBlue hover:text-white'>
            Explore
          </Button>
        </div>
      </div>

      <div data-aos="fade-left" className={`w-full md:w-1/2 md:pl-16`}>
        <img src={HeaderBg} alt='header' className='w-full object-contain' />
      </div>
    </header>
  );
};

export default Header;
