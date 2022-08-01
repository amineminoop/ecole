
import { useState } from "react";
import { BsArrowLeftShort,BsFillPeopleFill,BsTable } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import {FaGraduationCap,FaBookOpen,FaLayerGroup} from 'react-icons/fa'
import {MdOutlinePayment} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
<div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } relative duration-300  shadow-2xl shadow-gray-500 `}
        >
          <BsArrowLeftShort
            onClick={() => setOpen(!open)}
            className={`bg-white text-dark-purple text-3xl rounded-full cursor-pointer absolute -right-3 top-9 border border-dark-purple ${
              !open ? "rotate-180" : ""
            }`}
          />
          <h1
            className={
              open
                ? "text-white font-medium text-2xl text-center uppercase underline decoration-wavy duration-300" 
                : "hidden"
            }
          >
            {" "}
            RAFIK-School{" "}
          </h1>
          <br />
          <div className="inline-flex mt-12 justify-center items-center text-center">
            <RiDashboardFill
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300 ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <FaGraduationCap
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300 ${
                !open && "scale-0"
              }`}
            >
            Student
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <MdOutlinePayment
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300 ${
                !open && "scale-0"
              }`}
            >
            Payment
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <BsFillPeopleFill
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300  ${
                !open && "scale-0"
              }`}
            >
            Teacher
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <FaBookOpen
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300  ${
                !open && "scale-0"
              }`}
            >
            Courses
            </h1>
          </div>
          
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <SiGoogleclassroom
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300  ${
                !open && "scale-0"
              }`}
            >
            Classroom
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <FaLayerGroup
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300  ${
                !open && "scale-0"
              }`}
            >
            Class
            </h1>
          </div>
          <br />
          <div className="inline-flex mt-5 justify-center items-center text-center">
            <BsTable
              className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-4 duration-500 ${
                !open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medieum text-xl duration-300 cursor-pointer hover:text-amber-300  ${
                !open && "scale-0"
              }`}
            >
            Program
            </h1>
          </div>
          
          
        </div>
  );
};

export default Sidebar;
