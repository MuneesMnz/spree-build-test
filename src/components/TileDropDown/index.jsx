import { PlusSquare } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const varients = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.6,
    },
  },
};
const TileDropDown = ({ subcontent, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative  w-full h-[100px] rounded-[15px]  flex justify-center items-center text-center px-3 ${
        theme === "dark" ? " bg-darkPrimary" : "bg-lightPrimary"
      } cursor-pointer `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {subcontent && isOpen ? (
        <motion.div
          className={`absolute top-0 left-0 rounded-[15px] border border-borderGray  w-full overflow-hidden shadow-md  ${
            theme === "dark" ? "bg-darkPrimary" : "bg-lightPrimary"
          }  z-10 py-2`}
          variants={varients}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          exit={"exit"}
        >
          {subcontent.map((item, index) => (
            <div
              key={index}
              className={`w-full px-5  ${
                theme === "dark"
                  ? "hover:bg-black/30"
                  : "hover:bg-specialBlue/30"
              }`}
            >
              <NavLink
                to={item.url}
                className={`p-2 px-5 flex justify-between items-center ${
                  subcontent.length - 1 === index
                    ? ""
                    : theme
                    ? " border-b-borderGray/10 border-b-[1px]"
                    : "border-b-borderBlue/30 border-b-[1px]"
                }  `}
              >
                <div className="text-sm font-[300]">{item.name}</div>
                <PlusSquare size={28} />
              </NavLink>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="z-0">{name}</div>
      )}
    </div>
  );
};

export default TileDropDown;
