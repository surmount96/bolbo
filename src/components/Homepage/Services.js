import Service1 from "../../assets/service1.svg";
import Service2 from "../../assets/service2.svg";
import Service3 from "../../assets/service3.svg";
import Button from "../UI/Button/Button";
import { SvgArrowRightIcon } from "../../assets/svg";

const Services = () => {
  return (
    <section className='bg-darkBlue mb-4 py-20'>
      <div className='text-white text-center mb-16'>
        <p className='text-md md:text-xl text-lightGrey mb-6'>Our services</p>
        <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose w-full md:w-2/3 mx-auto'>
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-10 md:gap-28 justify-between items-center px-5 md:px-40'>
        <div className='w-full md:w-1/3 text-white'>
          <div>
            <img
              src={Service1}
              alt='service'
              className='w-full object-contain'
            />
          </div>
          <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
          <Button className='border-b border-white flex items-center gap-3 rounded-none'>
            Explore page
            <SvgArrowRightIcon color='#fff' width='24' height='26' />
          </Button>
        </div>
        <div className='w-full md:w-1/3 text-white'>
          <div>
            <img
              src={Service2}
              alt='service'
              className='w-full object-contain'
            />
          </div>
          <p className='text-2xl mt-4 mb-6'>Even cooler feature</p>
          <Button className='border-b border-white flex items-center gap-3 rounded-none'>
            Explore page
            <SvgArrowRightIcon color='#fff' width='24' height='26' />
          </Button>
        </div>
        <div className='w-full md:w-1/3 text-white'>
          <div>
            <img
              src={Service3}
              alt='service'
              className='w-full object-contain'
            />
          </div>
          <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
          <Button className='border-b border-white flex items-center gap-3 rounded-none'>
            Explore page
            <SvgArrowRightIcon color='#fff' width='24' height='26' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
