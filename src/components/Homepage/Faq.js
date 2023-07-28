import Customer1 from "../../assets/customer1.svg";
import Customer from "../../assets/customer.svg";
import Bar from "../../assets/barChart.svg";
import Pie from "../../assets/pieChart.svg";
import { SvgCheckIcon } from "../../assets/svg";
import Button from "../UI/Button/Button";

const customers = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];

export const Faq = () => {
  return (
    <>
      <div className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 items-center justify-between px-5 md:px-44 py-14'>
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
      <div className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 items-center justify-between px-5 md:px-44 py-14'>
        <div className='w-full md:w-[493px]'>
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
