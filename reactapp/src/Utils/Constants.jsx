/* eslint-disable quotes */

export const GOOGLE_AUTO_SEARCH_API = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;

export const GOOGLE_LAT_LONG_API = `https://maps.googleapis.com/maps/api/place/details/json`;

export const GOOGLE_PLACES_API_KEY = "AIzaSyCsSMOQKo0RE0mKvmqjQWMGhHmVVqqEmsU";

// export const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
// export const passwordPattern = /^.*(?=.{8,})/;

export const Fonts = {
  regular: "OpenSauceSans-Regular",
  light: "OpenSauceSans-Light",
  medium: "OpenSauceSans-Medium",
  bold: "OpenSauceSans-Bold",
  semi_bold: "OpenSauceSans-SemiBold",
};

export const Images = {
  login_bg: "../assets/Images/login_bg.png",
  app_logo: "../../assets/Images/app_logo.png",
  login_logo: "../assets/Images/login_logo.png",
  linkedin_logo: "../assets/Images/new_ic_linkedin.png",
  dashboard_bg: "../assets/Images/dashboard_background.png",
  left_arrow: "../assets/Images/ic_left_arrow.png",
  rigth_arrow: "../assets/Images/ic_rigth_arrow.png",

  //Side bar icon
  // dashboard_select: require("../assets/Images/new_ic_dashboard_sel.png"),
  // dashboard: require("../assets/Images/new_ic_dashboard.png"),
  // fundraising_select: require("../assets/Images/new_ic_fundraising_sel.png"),
  // fundraising: require("../assets/Images/new_ic_fundraising.png"),
  // resource_select: require("../assets/Images/new_ic_resource_sel.png"),
  // resource: require("../assets/Images/new_ic_resource.png"),
  // service_select: require("../assets/Images/new_ic_service_sel.png"),
  // service: require("../assets/Images/new_ic_service.png"),
  // tools_select: require("../assets/Images/new_ic_tools_sel.png"),
  // tools: require("../assets/Images/new_ic_tools.png"),
  // appicon: require("../assets/Images/new_ic_logo.png"),
  // employee_recruit: require("../assets/Images/new_employee_recruit.png"),
  // employee_recruit_close: require("../assets/Images/new_ic_profile.png"),
  // dealsicon: require("../assets/Images/new_ic_deals.png"),
  // forgetpwdbg: require("../assets/Images/ic_forgetpwdbg.png"),
  // panda: require("../assets/Images/ic_panda.png"),
  // loaderview: require("../assets/Images/ic_loader.gif"),
  // banner_bg: require("../assets/Images/banner_bg.png"),
  // userImage: require("../assets/Images/ic_userimage.png"),
  // mForward: require("../assets/Images/ic_forward.png"),
  // mBackward: require("../assets/Images/ic_backward.png"),
  // mDeckrecharge: require("../assets/Images/ic_new_star.png"),

  // notification: require("../assets/Images/ic_notification.svg"),
  // moneybag: require("../assets/Images/ic_moneybag.svg"),
};

export const Icons = {};

export const isValidMobileNumber = (number) => {
  // Regular expression for mobile number validation
  const mobileRegex = /^[6-9][0-9]{9}$/;
  return mobileRegex.test(number);
};

export const isValidEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  // Regular expression for email validation
  const emailRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#/$&*~]).{8,}$/;
  return emailRegex.test(password);
};
