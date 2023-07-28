import Customer1 from "../../assets/customer1.svg";
import Customer from "../../assets/customer.svg";
import Bar from "../../assets/barChart.svg";
import Pie from "../../assets/pieChart.svg";
import {
  SvgCheckIcon,
  SvgEyeIcon,
  SvgFeatherIcon,
  SvgSunIcon,
} from "../../assets/svg";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";

const customers = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];

const CustomerContent = () => {
  return (
    <>
      <div
        data-aos='zoom-in'
        className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 items-center justify-between px-5 md:px-44 py-14'
      >
        <div className='w-full md:w-[494px] md:h-[610px'>
          <div>
            <img
              src={Customer1}
              alt='service'
              className='object-contain w-full h-full'
            />
          </div>
          <div className='flex justify-end -mt-80 mr-6'>
            <img src={Bar} alt='service' />
          </div>
        </div>
        <div className='w-full md:w-[493px]'>
          <h3 className='text-xl md:text-4xl leading-relaxed'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          {customers?.map((cus, count) => (
            <div className='flex items-center gap-3 my-10' key={count}>
              <div className='flex items-center justify-center bg-darkBlue h-8 w-8 rounded-full'>
                <SvgCheckIcon />
              </div>
              <p className='md:text-xl'>{cus}</p>
            </div>
          ))}

          <Button className='px-14 text-white bg-darkBlue hover:opacity-90'>
            Start now
          </Button>
        </div>
      </div>
      <div
        data-aos='zoom-in'
        className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 items-center justify-between px-5 md:px-44 py-14'
      >
        <div className='w-full md:w-[493px]'>
          <h3 className='text-xl md:text-4xl leading-relaxed'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>

          <div className='flex flex-col gap-8 mt-10'>
            <Card
              title='We connect our customers with the best.'
              count={1}
              Icon={() => <SvgFeatherIcon />}
            />
            <Card
              title='Advisor success customer launch party.'
              count={2}
              Icon={() => <SvgEyeIcon />}
            />
            <Card
              title='Business-to-consumer long tail.'
              count={3}
              Icon={() => <SvgSunIcon />}
            />
           
          </div>
        </div>
        <div className='w-full md:w-[494px] md:h-[610px'>
          <div>
            <img
              src={Customer}
              alt='service'
              className='object-contain w-full h-full'
            />
          </div>
          <div className='-mt-80 ml-6'>
            <img src={Pie} alt='service' />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerContent;
