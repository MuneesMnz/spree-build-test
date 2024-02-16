import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BreadCrumps = ({ breadcrumps }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);

  const lastIndex = breadcrumps.length - 1;
  return (
    <div>
      <div className="cursor-pointer flex gap-2 items-center mb-5 md:-ml-5 lg:-ml-10 max-md:hidden ">
        <ArrowLeft size={25} className="mr-2" />
        {breadcrumps.map((item, ind) => (
          <div className="flex gap-2" key={ind}>
            <div
              className={`${
                breadcrumps.length - 1 !== ind
                  ? "text-[#6E6E6E]"
                  : theme==="dark"?"text-inherit":"text-black"
              }  transition-all duration-300 text-[13px] md:text-[15px]`}
              onClick={() => item.url && navigate(item.url)}
            >
              {item.name}
            </div>
            {breadcrumps.length - 1 !== ind && (
              <div className="text-[#6E6E6E]">/</div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden flex  items-center ">
        <ArrowLeft
          size={25}
          className="mr-2"
          onClick={() => navigate(breadcrumps[lastIndex - 1].url)}
        />
        <div>{breadcrumps[lastIndex].name}</div>
      </div>
    </div>
  );
};

export default BreadCrumps;
