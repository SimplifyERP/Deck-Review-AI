import React from "react";
//import { Images } from "../Utils/Constants";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

const InputContainer = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled,
  secureTextEntry,
  PasswordVisibility,
  setshowPassword,
  maxLength,
  showInfoicon,
  clickInfoIcon,
}) => (
  <div
    className={`flex flex-row justify-between border-mGreyFour  text-xs  lg:text-sm  rounded-md p-2 w-full focus:outline-none focus:mBlueOne hover:border-mGreyFour mt-3 border ${
      disabled ? "bg-mDisabled" : "bg-mLightColorOne"
    }`}
  >
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required
      disabled={disabled}
      className={`text-xs  lg:text-sm text-mBlackOne font-OpenSauceSansRegular w-full border-none focus:border-none  ${
        disabled ? "bg-mDisabled" : "bg-mLightColorOne"
      } border-4 !outline-none`}
    ></input>

    {showInfoicon && (
      <button className="flex-row-reverse ml-4" onClick={clickInfoIcon}>
        <BsFillInfoCircleFill />
      </button>
    )}

    {secureTextEntry && (
      <button className="flex-row-reverse ml-4" onClick={PasswordVisibility}>
        {setshowPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    )}
  </div>
);

export default InputContainer;
//t
