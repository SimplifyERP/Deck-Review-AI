import React from "react";
import { useState } from "react";
import { Images } from "../Utils/Constants";
import { Colors } from "../Utils/Constants";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SideMenu = (props) => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation("");
  const navigate = useNavigate();

  const Menus = [
    {
      title: t("dashboard"),
      src: open ? Images.dashboard_select : Images.dashboard_select,
    },
    {
      title: t("fundraising"),
      src: open ? Images.fundraising_select : Images.fundraising_select,
    },
    {
      title: t("learn"),
      src: open ? Images.resource_select : Images.resource_select,
    },
    {
      title: t("services"),
      src: open ? Images.service_select : Images.service_select,
    },
    {
      title: t("tools"),
      src: open ? Images.tools_select : Images.tools_select,
    },
  ];

  const handleClick = (itemName) => {
    //  alert(`You clicked on ${itemName}`);
    if (itemName === 0) {
      navigate("/dashboard");
    } else if (itemName === 1) {
      navigate("/searchinvestors");
    } else if (itemName === 2) {
      navigate("/courseslist");
    } else if (itemName === 3) {
      navigate("/service");
    } else if (itemName === 4) {
      navigate("/pitchroom");
    }
  };

  const FundraisingExpertsClick = (itemName) => {
    //  alert(`You clicked on ${itemName}`);

    navigate("/fundraisingexperts");
  };

  return (
    <div className="mb-6 lg:mb-6">
      <div
        className={`${
          open ? " w-16 lg:w-64" : "w-16"
        } bg-dark-purple justify-center h-full relative items-start bg-white rounded-xl overflow-hidden shadow-md  ml-2 mt-2 mb-4 mr-2 pl-3 py-3  hidden lg:block`}
      >
        {open ? (
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-1">
              <img src={Images.app_logo} alt="appicon" className="p-4" />
            </div>

            <div className="border-t-2 mr-2"></div>

            <div>
              <ul className="pt-6 space-y-3 ">
                {Menus.map((Menu, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 pl-10
                  ${props.mFrom === index ? "bg-mBlueTwo" : "bg-white"} ${
                      props.mFrom === index
                        ? "border-r-8 border-customBlue"
                        : "border-none"
                    }`}
                  >
                    {/* <img src={Images.app_logo} alt="appicon" /> */}
                    <img src={Menu.src} alt="appicon" className="h-6 w-6" />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      <div
                        className={` ${
                          props.mFrom === index
                            ? "text-kTextColorTwo"
                            : "text-mGreyEigth"
                        } ${
                          props.mFrom === index
                            ? "font-OpenSauceSansSemiBold"
                            : "font-OpenSauceSansRegular"
                        } text-mSeventeen  `}
                      >
                        {" "}
                        {Menu.title}{" "}
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto absolute bottom-1 h-80 w-11/12 bg-red-500 mr-10">
              <div className="bg-white h-full  justify-end items-center flex flex-col ">
                <div className="bg-white h-full w-full   justify-start items-center flex flex-col relative">
                  <img
                    src={Images.employee_recruit}
                    alt="appicon"
                    className="w-36 h-36 absolute"
                  />

                  <div className="bg-mBlueTwo h-full w-full mt-16 rounded-3xl items-center justify-center flex flex-col">
                    <p className="font-OpenSauceSansMedium text-mTwenty text-mGreyTen mt-16">
                      {t("mHireOurExperts")}
                    </p>
                    <p className="font-OpenSauceSansRegular text-mTwelve text-mGreySeven mt-2 justify-center items-center flex text-center">
                      {t("mHireOurExpertsMsg")}
                    </p>

                    <button
                      className={` text-white  w-11/12 text-sm py-2 px-10 rounded-full mt-4 h-11 font-OpenSauceSansRegular ${"bg-gradient-to-r from-mGradientOne to-mGradientTwo"}`}
                      onClick={FundraisingExpertsClick}
                    >
                      {t("FundraisingExperts")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-64 h-full bg-white shadow-lg p-6 flex flex-col">
           
          </div> */}
          </div>
        ) : (
          <div>
            {" "}
            <p> 123</p>{" "}
          </div>
        )}
      </div>

      <div
        className={`w-16 h-full bg-dark-purple justify-center relative items-start bg-white rounded overflow-hidden shadow-md  ml-2 mt-2 mb-1 mr-2 py-2  block lg:hidden`}
      >
        {open ? (
          <div className="h-full flex flex-col">
            <div className="flex items-center space-x-3 mb-1">
              <img src={Images.appicon} alt="appicon" className="p-4" />
            </div>

            <div className="border-t-2 mr-2"></div>

            <div>
              <div className="ml-2">
                <ul className="pt-6 space-y-4 ">
                  {Menus.map((Menu, index) => (
                    <li
                      onClick={() => handleClick(index)}
                      key={index}
                      className={`flex rounded p-2 cursor-pointer  justify-center items-center gap-x-4 
                        ${props.mFrom === index ? "bg-mBlueTwo" : "bg-white"} ${
                        props.mFrom === index
                          ? "border-r-8 border-customBlue"
                          : "border-none"
                      }`}
                    >
                      {/* <img src={Images.app_logo} alt="appicon" /> */}
                      <img src={Menu.src} alt="appicon" className="h-6 w-6 " />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto bottom-1 h-80 w-11/12  mr-10 px-1">
              <div className="bg-white h-full  justify-end items-center flex flex-col ">
                <img
                  className=""
                  src={Images.employee_recruit_close}
                  alt="Workplace"
                  width="600"
                />
              </div>
            </div>

            {/* <div className="w-64 h-full bg-white shadow-lg p-6 flex flex-col">
           
          </div> */}
          </div>
        ) : (
          <div>
            {" "}
            <p> 123</p>{" "}
          </div>
        )}
      </div>
    </div>

    // <div className="w-72 h-dvh flex-col flex  justify-center items-center bg-white"></div>
  );
};

export default SideMenu;
