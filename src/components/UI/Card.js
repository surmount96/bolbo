import { useState } from "react";

const Card = ({ Icon, title }) => {
//   const Icon = Icon;
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
      <Icon color={active ? "#ffffff" : "#0A2640"} />
      <p className=''>{title}</p>
    </div>
  );
};

export default Card;
