import Boldo from "../../assets/boldo.svg";
import BoldoWithoutIcon from "../../assets/BoldoWithoutIcon.svg";
import Presto from "../../assets/presto.svg";
import Prest from "../../assets/Prest.svg";

const Partner = () => (
  <div className='flex flex-wrap md:flex-nowrap items-center gap-7 justify-between my-8 md:my-20 px-4 md:px-32'>
    <img src={Boldo} alt='boldo' />
    <img src={Presto} alt='presto' />
    <img src={Boldo} alt='boldo' />
    <img src={Presto} alt='presto' />
    <img src={BoldoWithoutIcon} alt='boldo' />
    <img src={Prest} alt='presto' />
  </div>
);

export default Partner;
