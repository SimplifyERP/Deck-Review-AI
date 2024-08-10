import React from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../Utils/Constants";
import PrimaryButton from "./PrimaryButton";

const Appbar = () => {
  const { t } = useTranslation("");

  const handleClick = () => {};
  return (
    <div className="flex justify-end">
      <div className="block lg:hidden w-min justify-end  items-end container ">
        <div className=" bg-white  rounded shadow-md flex-row flex  items-center justify-end ">
          <ul className=" items-center">
            <li className="my-3 mx-8"> Upgrade</li>
            <li className="my-3 mx-8"> Upgrade</li>
            <li className="my-3 mx-8"> Upgrade</li>
            <li className="my-3 mx-8"> Upgrade</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
