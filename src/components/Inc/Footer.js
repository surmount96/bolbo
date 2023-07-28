import Logo from "../../assets/boldo.svg";

const Footer = () => (
  <footer className='flex gap-6 flex-wrap md:flex-nowrap justify-between px-4 md:px-20 py-14'>
    <div className='w-full md:w-4/12'>
      <div>
        <img src={Logo} alt='boldo logo' />
      </div>
      <div className='flex flex-col gap-10 mt-6 text-brand-gray w-full md:w-[300px]'>
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p>All rights reserved.</p>
      </div>
    </div>
    <div className='w-full md:w-2/12'>
      <div className='flex flex-col gap-10 text-brand-gray text-xl'>
        <p className='font-bold  text-black'>Landings</p>
        <p>Home</p>
        <p>Products</p>
        <p>Services</p>
      </div>
    </div>
    <div className='w-full md:w-2/12'>
      <div className='flex flex-col gap-10 text-brand-gray text-xl'>
        <p className='font-bold  text-black'>Company</p>
        <p>Home</p>
        <p className='flex items-center gap-3'>
          Careers
          <span className='bg-brand-green text-darkBlue text-[13px] rounded-56 px-3 font-bold'>
            Hiring!
          </span>
        </p>
        <p>Services</p>
      </div>
    </div>
    <div className='w-full md:w-2/12'>
      <div className='flex flex-col gap-10 text-brand-gray text-xl'>
        <p className='font-bold  text-black'>Resources</p>
        <p>Blog</p>
        <p>Products</p>
        <p>Services</p>
      </div>
    </div>
  </footer>
);

export default Footer;
