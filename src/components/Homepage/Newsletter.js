import Button from "../UI/Button/Button";
import Input from "../UI/Form/Input";

const Newsletter = () => {
  return (
    <section
      className="bg-darkBlue px-5 md:px-0 md:mx-20 rounded md:rounded-xl py-7 md:py-0 bg-no-repeat bg-right-top bg-[url('https://res.cloudinary.com/eleczra/image/upload/v1690553791/bgGroup_sslbsv.svg')]
   "
    >
      <div className='md:h-[391px] flex flex-col items-center justify-center gap-10 w-full md:w-[716px] mx-auto'>
        <div className='text-white md:text-center'>
          <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose'>
            An enterprise template to ramp up your company website
          </h2>
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-3 w-full md:w-10/12 mx-auto'>
          <Input type='text' placeholder='Your email address' />
          <div className='w-72'>
            <Button className='text-darkBlue bg-brand-green w-full'>
              Start now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
