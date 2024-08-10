import React from "react";
import { useTranslation } from "react-i18next";
import "./ScrollableView.css";

const AlertDialog = ({
  onConfirm,
  onClose,
  children,
  mPostion,
  isSmall,
  isPadding,
  isAlert,
}) => {
  const { t } = useTranslation("");

  return (
    <div
      className={`fixed inset-0 flex ${
        mPostion
          ? "items-center justify-end pr-10"
          : "items-center justify-center"
      } bg-black bg-opacity-50 z-50 `}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 ${
          isPadding ? "p-0" : "p-6"
        } ${isSmall ? "w-96" : "w-2/5"} ${
          isAlert ? "h-auto" : "h-90"
        } scroll-container`}
      >
        {children}
      </div>
    </div>
  );
};

export default AlertDialog;
