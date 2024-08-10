import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../Utils/Constants";
import PrimaryButton from "../Components/PrimaryButton";
import { ReactComponent as Notification } from "../assets/Images/ic_notification.svg";
import { ReactComponent as DealSelect } from "../assets/Images/new_ic_dealsselect.svg";
import { ReactComponent as DealUnSelect } from "../assets/Images/new_ic_deals.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/Images/ic_user.svg";
import { ReactComponent as SettingsIcon } from "../assets/Images/ic_setting.svg";
import { ReactComponent as SupportIcon } from "../assets/Images/ic_support.svg";
import { ReactComponent as LogoutIcon } from "../assets/Images/ic_logout.svg";

const Appbar = (props) => {
  const { t } = useTranslation("");
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSupport = () => {
    navigate("/support");
  };

  const handleprofile = () => {
    navigate("/profile");
  };

  const DealsClick = () => {
    navigate("/deals");
  };
  return (
    <div className=" mb-3">
      <div className="w-full  hidden  md:block  flex-col justify-between">
        <div className=" bg-white  h-16 rounded-xl shadow-md flex-row flex  items-center justify-end pl-8 pr-8 mx-auto">
          <div className="flex">
            <button
              className={` text-white  py-2 px-10 rounded-full  mr-2 h-11 mx-auto font-OpenSauceSansRegular ${"bg-gradient-to-r from-mGradientOne to-mGradientTwo "}`}
            >
              {t("Upgrade")}
            </button>
            {/* // navigate("/service"); */}
            <button onClick={DealsClick}>
              {/* <img
                src={Images.dealsicon}
                alt="Profile"
                className="w-10 h-10 rounded-full ml-2 mr-2"
              /> */}

              {props.mFrom === 1 ? (
                <div>
                  <DealSelect className="w-10 h-10 rounded-full ml-2 mr-2" />
                </div>
              ) : (
                <DealUnSelect className="w-10 h-10 rounded-full ml-2 mr-2" />
              )}
            </button>

            <Notification className=" ml-2 mr-2" />
            <div onClick={toggleMenu} className="cursor-pointer">
              <img
                src={Images.userImage}
                alt="Profile"
                className="w-10 h-10 rounded-full ml-2 mr-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mb-3 block  md:hidden  flex-col justify-between">
        <div className=" bg-white   rounded-xl shadow-md flex-row flex  items-center justify-end p-2 mx-auto">
          <div>
            <div className="flex">
              {props.mFrom === 1 ? (
                <div>
                  <DealSelect className="w-10 h-10 rounded-full ml-2 mr-2" />
                  <p>sdgdsg</p>
                </div>
              ) : (
                <DealUnSelect className="w-10 h-10 rounded-full ml-2 mr-2" />
              )}
              {/* <img
                src={Images.dealsicon}
                alt="Profile"
                className="w-10 h-10 rounded-full ml-2 mr-2"
              /> */}
              {/* <img
                src={Images.dealsicon}
                alt="Profile"
                className="w-10 h-10 rounded-full ml-2 mr-2"
              /> */}
              <Notification className=" ml-2 mr-2" />
              <img
                src={Images.userImage}
                alt="Profile"
                className="w-10 h-10 rounded-full ml-2 mr-2"
              />
            </div>
            <button
              className={` text-white py-2 px-10 rounded-full mt-4 mr-2 h-11 mx-auto font-OpenSauceSansRegular ${"bg-gradient-to-r from-mGradientOne to-mGradientTwo "}`}
            >
              {t("Upgrade")}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-5  rounded-xl px-5 py-3 border border-mGreyThree  bg-white ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              className=" flex justify-start items-start cursor-pointer"
              onClick={() => handleprofile()}
            >
              <UserIcon className="w-5 h-5" />
              <p className="font-OpenSauceSansMedium text-mFourteen text-mGreyTen ml-4">
                {t("mprofile")}
              </p>
            </div>

            <div className=" flex justify-start items-start cursor-pointer mt-5">
              <SettingsIcon className="w-5 h-5" />
              <p className="font-OpenSauceSansMedium text-mFourteen text-mGreyTen ml-4">
                {t("mAccountSettings")}
              </p>
            </div>

            <div
              className=" flex justify-start items-start cursor-pointer mt-5"
              onClick={() => handleSupport()}
            >
              <SupportIcon className="w-5 h-5" />
              <p className="font-OpenSauceSansMedium text-mFourteen text-mGreyTen ml-4">
                {t("mCustomerSupport")}
              </p>
            </div>

            <div className="mt-5  border border-mGreyThree"></div>

            <div
              className=" flex justify-start items-start cursor-pointer mt-5 px-5"
              onClick={mLogout}
            >
              <LogoutIcon className="w-5 h-5" />
              <p className="font-OpenSauceSansMedium text-mFourteen text-mRedOne ml-4">
                {t("mLogout")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appbar;

{
  /* <button
className={` text-white  py-2 px-10 rounded-full  h-11 mx-auto font-OpenSauceSansRegular ${"bg-gradient-to-r from-mGradientOne to-mGradientTwo "}`}
onClick={handleClick}
>
{t("Upgrade")}
</button> */
}
