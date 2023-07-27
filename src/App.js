import HeaderBg from "./assets/HeroGraphics.svg";
import Layout from "./components/Layout/DefaultLayout";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Form/Input";

function App() {
  return (
    <Layout>
      <header className='flex flex-wrap md:flex-nowrap gap-3 px-4 md:px-20 py-4 md:py-20 items-center'>
        <div className='w-full md:w-1/2'>
          <h1 className='text-5xl mb-4 leading-extra-loose'>
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className='mb-8'>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className='flex items-center gap-3'>
            <Button className='px-14 text-white bg-darkBlue'>Buy template</Button>
            <Button className='border border-darkBlue text-darkBlue px-14 bg-transparent'>
              Explore
            </Button>
          </div>
        </div>

        <div className={`w-full md:w-1/2`}>
          <img src={'../assets/HeroGraphics.svg'} alt='header' />
        </div>
      </header>
      <section className='bg-darkBlue h-96 mb-4'>
        <div className='text-white text-center'>
          {/* <Input type="text" placeholder="Your email address" /> */}
          <p className='text-xl text-lightGrey'>Our services</p>
          <h2 className='text-5xl leading-extra-loose w-full md:w-1/2 mx-auto'>
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
      </section>
      <section className='bg-darkBlue'>
        <div className='h-[391px] flex flex-col items-center justify-center gap-10 w-full md:w-2/4 mx-auto'>
          <div className='text-white text-center'>
            <h2 className='text-5xl leading-extra-loose'>
              An enterprise template to ramp up your company website
            </h2>
          </div>
          <div className='flex gap-3 w-2/3 mx-auto'>
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
