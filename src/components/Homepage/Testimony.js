import Author1 from "../../assets/author1.svg";
import { SvgArrowLeftIcon, SvgArrowRightIcon } from "../../assets/svg";

const testimonies = [
  {
    description:
      " “Buyer buzz partner network disruptive non-disclosure agreement business”",
    pic: Author1,
    author: "Albus Dumbledore",
    role: "Manager @ Howarts",
  },
  {
    description:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.” ",
    pic: Author1,
    author: "Severus Snape",
    role: "Manager @ Howarts",
  },
  {
    description:
      "   “Release facebook responsive web design business model canvas seed money monetization.”",
    pic: Author1,
    author: "Harry Potter",
    role: "Team Leader @ Gryffindor",
  },
];
export const Testimony = () => {
  return (
    <section className='bg-darkBlue mb-4 py-32 px-5 md:px-40'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap'>
        <div className='text-white mb-6 md:mb-16'>
          <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose w-full md:w-9/12'>
            An enterprise template to ramp up your company website
          </h2>
        </div>
        <div className='flex items-center gap-4'>
          <div className='h-16 w-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-all'>
            <SvgArrowLeftIcon />
          </div>
          <div className='h-16 w-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-all'>
            <SvgArrowRightIcon />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-10 md:gap-10 justify-between mt-6 md:mt-0'>
        {testimonies?.map((tes, count) => (
          <div
            key={count}
            className='w-full md:w-1/3 bg-white rounded-xl p-10 self-start'
          >
            <p className='text-2xl mb-6'>{tes.description}</p>

            <div className='flex items-center gap-3'>
              <div className='flex items-center justify-center h-8 w-8 rounded-full'>
                <img src={tes.pic} alt='author' />
              </div>
              <div className='text-darkBlue'>
                <p className='font-bold'>{tes.author}</p>
                <p className='text-sm'>{tes.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
