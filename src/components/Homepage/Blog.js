import Pic1 from "../../assets/pic1.svg";
import Pic2 from "../../assets/pic2.svg";
import Pic3 from "../../assets/pic3.svg";
import Author1 from "../../assets/author1.svg";
import Author2 from "../../assets/author2.svg";
import Author3 from "../../assets/author3.svg";
import Button from "../UI/Button/Button";

const posts = [
  {
    author: "Chandler Bing",
    description: "Pitch termsheet backing validation focus release.",
    img: Pic1,
    pic: Author1,
  },
  {
    author: "Rachel Green",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    img: Pic2,
    pic: Author2,
  },
  {
    author: "Monica Geller",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    img: Pic3,
    pic: Author3,
  },
];

const Blog = () => {
  return (
    <section className='mb-4 py-9 md:py-14'>
      <div className='text-center mb-7 md:mb-12'>
        <p className='text-md md:text-xl text-brand-gray'>Our Blog</p>
        <h2 className='text-2xl md:text-5xl leading-9 md:leading-extra-loose w-full md:w-2/3 mx-auto'>
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-14 items-center px-5 md:px-40'>
        {posts.map((post, count) => (
          <div className='w-full md:w-1/3' key={count}>
            <div className='mb-4'>
              <img src={post.img} alt='service' className='w-full' />
            </div>
            <p className='font-bold'>
              Category{" "}
              <span className='text-brand-gray font-normal ml-2'>
                November 22, 2021
              </span>
            </p>
            <p className='my-3 text-xl'>{post.description}</p>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center h-8 w-8 rounded-full'>
                <img src={post.pic} alt='d' />
              </div>

              <p>{post.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center my-10 md:my-20'>
        <Button className='border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white transition-colors px-14 bg-transparent'>
          Load more
        </Button>
      </div>
    </section>
  );
};

export default Blog;
