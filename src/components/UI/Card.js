import { useState } from "react";
import { SvgEyeIcon, SvgFeatherIcon, SvgSunIcon } from "../../assets/svg";

const Card = ({ count, title }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`flex items-center gap-3 shadow-md px-4 py-5 rounded font-semibold transition-all cursor-pointer ${
        active && "bg-darkBlue text-white"
      }`}
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseOut={() => {
        setActive(false);
      }}
    >
      {count === 1 ? (
        <SvgFeatherIcon color={active ? "#ffffff" : "#0A2640"} />
      ) : count === 2 ? (
        <SvgEyeIcon color={active ? "#ffffff" : "#0A2640"} />
      ) : (
        <SvgSunIcon color={active ? "#ffffff" : "#0A2640"} />
      )}

      <p className=''>{title}</p>
    </div>
  );
};

export default Card;
