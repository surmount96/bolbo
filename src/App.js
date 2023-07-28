import HeaderBg from "./assets/HeroGraphics.svg";
import Layout from "./components/Layout/DefaultLayout";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Form/Input";
import Service1 from "./assets/service1.svg";
import Service2 from "./assets/service2.svg";
import Service3 from "./assets/service3.svg";
import Pic1 from "./assets/pic1.svg";
import Pic2 from "./assets/pic2.svg";
import Pic3 from "./assets/pic3.svg";
import Customer1 from "./assets/customer1.svg";
import { SvgArrowRightIcon, SvgCheckIcon } from "./assets/svg";

const customers = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];
function App() {
  return (
    <Layout>
      <header className='flex flex-wrap md:flex-nowrap gap-3 px-4 md:px-20 py-4 md:py-20 items-center'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose mb-8'>
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className='mb-6 md:mb-20'>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-3'>
            <Button className='px-14 text-white bg-darkBlue'>
              Buy template
            </Button>
            <Button className='border border-darkBlue text-darkBlue px-14 bg-transparent'>
              Explore
            </Button>
          </div>
        </div>

        <div className={`w-full md:w-1/2`}>
          <img
            src={HeaderBg}
            alt='header'
            className='w-full md:h-[423px] object-cove'
          />
        </div>
      </header>
      <section className='bg-darkBlue mb-4 py-14'>
        <div className='text-white text-center mb-6'>
          <p className='text-md md:text-xl text-lightGrey'>Our services</p>
          <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose w-full md:w-2/3 mx-auto'>
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-14 items-center px-5 md:px-20'>
          <div className='w-full md:w-1/3 text-white'>
            <div>
              <img
                src={Service1}
                alt='service'
                className='w-full h-[354px] object-cover rounded-56'
              />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
          <div className='w-full md:w-1/3 text-white'>
            <div>
              <img
                src={Service2}
                alt='service'
                className='w-full h-[354px] object-cover rounded-56'
              />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
          <div className='w-full md:w-1/3 text-white'>
            <div>
              <img
                src={Service3}
                alt='service'
                className='w-full h-[354px] object-cover rounded-56'
              />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
        </div>
      </section>
      <div className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 items-center px-5 md:px-20 py-14'>
        <div className='w-full md:w-1/2 items-stretch'>
          <img
            src={Customer1}
            alt='service'
            className='w-full h-[506p] object-cover rounded-56'
          />
        </div>
        <div className='w-full md:w-1/2 md:pt-20'>
          <h3 className='text-4xl leading-relaxed'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          {customers?.map((cus, count) => (
            <div className='flex items-center gap-3 my-10' key={count}>
              <div className='flex items-center justify-center bg-darkBlue h-8 w-8 rounded-full'>
                <SvgCheckIcon />
              </div>
              <p className='text-xl'>{cus}</p>
            </div>
          ))}

          <Button className='px-14 text-white bg-darkBlue'>Start now</Button>
        </div>
      </div>
      <section className=' mb-4 py-14'>
        <div className='text-center mb-6'>
          <p className='text-md md:text-xl text-brand-gray'>Our Blog</p>
          <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose w-full md:w-2/3 mx-auto'>
            Value proposition accelerator product management venture
          </h2>
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-14 items-center px-5 md:px-20'>
          <div className='w-full md:w-1/3'>
            <div>
              <img src={Pic1} alt='service' className='w-full h-[354px]' />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
          <div className='w-full md:w-1/3'>
            <div>
              <img src={Pic2} alt='service' className='w-full h-[354px]' />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
          <div className='w-full md:w-1/3'>
            <div>
              <img src={Pic3} alt='service' className='w-full h-[354px]' />
            </div>
            <p className='text-2xl mt-4 mb-6'>Cool feature title</p>
            <Button className='border-b-2 border-white flex items-center gap-3 rounded-none pb-1'>
              Explore page
              <SvgArrowRightIcon color='#fff' width='24' height='26' />
            </Button>
          </div>
        </div>
        <div className='flex justify-center my-10'>
          <Button className='border border-darkBlue text-darkBlue px-14 bg-transparent'>
            Load more
          </Button>
        </div>
      </section>
      <section className='bg-darkBlue px-5 md:px-0 md:mx-20 rounded md:rounded-xl py-10'>
        <div className='md:h-[391px] flex flex-col items-center justify-center gap-10 w-full md:w-[716px] mx-auto'>
          <div className='text-white md:text-center'>
            <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose'>
              An enterprise template to ramp up your company website
            </h2>
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-3 w-full md:w-2/3 mx-auto'>
            <Input type='text' placeholder='Your email address' />
            <div className='w-64'>
              <Button className='text-darkBlue bg-brand-green w-full'>
                Start now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
