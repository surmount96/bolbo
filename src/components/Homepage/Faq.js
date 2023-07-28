import Hero from "../../assets/connect.svg";
import { SvgArrowDownIcon } from "../../assets/svg";

const connects = [
  "We connect our customers with the best.",
  "Android research & development rockstar? ",
];

export const Faq = () => {
  return (
    <div className='px-5 md:px-44 py-14'>
      <div>
        <img src={Hero} alt='Hero' className='object-contain w-full h-full' />
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-5 md:gap-16 justify-between my-8'>
        <div className='w-full md:w-[494px]'>
          <h3 className='text-xl md:text-4xl !leading-[56px]'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
        </div>
        <div className='w-full md:w-[493px] flex flex-col gap-9'>
          {connects?.map((con, index) => (
            <div
              key={index}
              className='flex items-start justify-between border-b border-brand-gray pb-4 hover:opacity-75'
            >
              <p className='text-xl'>{con}</p>
              <div className='h-7 w-7 flex items-center justify-center bg-darkBlue cursor-pointer rounded-full'>
                <SvgArrowDownIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
