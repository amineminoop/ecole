import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-dark-purple h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } relative duration-300`}
    >
      <BsArrowLeftShort
        onClick={() => setOpen(!open)}
        className={`bg-white text-dark-purple text-3xl rounded-full cursor-pointer absolute -right-3 top-9 border border-dark-purple ${
          !open ? "rotate-180":""
        }`}
      />
    </div>
  );
};

export default Sidebar;
