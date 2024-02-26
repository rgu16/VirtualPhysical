import React from "react";

const sizeClasses = {
  txtInterMedium14Gray20003: "font-inter font-medium",
  txtCairoExtraBold30: "font-cairo font-extrabold",
  txtCairoRegular18: "font-cairo font-normal",
  txtDMSansMedium30: "font-dmsans font-medium",
  txtInterMedium21: "font-inter font-medium",
  txtCairoRegular14: "font-cairo font-normal",
  txtCairoBold30: "font-bold font-cairo",
  txtHelveticaBold16: "font-bold font-helvetica",
  txtInterBold24: "font-bold font-inter",
  txtCairoBold34: "font-bold font-cairo",
  txtHelveticaNeueMedium20: "font-helveticaneue font-medium",
  txtCairoSemiBold15: "font-cairo font-semibold",
  txtCairoExtraBold25: "font-cairo font-extrabold",
  txtCairoBold20Black900: "font-bold font-cairo",
  txtHelveticaNeueBold30: "font-bold font-helveticaneue",
  txtInterMedium14Red600: "font-inter font-medium",
  txtInterMedium20GreenA700: "font-inter font-medium",
  txtCairoBold40: "font-bold font-cairo",
  txtNunitoRegular12: "font-normal font-nunito",
  txtCairoRegular22: "font-cairo font-normal",
  txtCairoBold20: "font-bold font-cairo",
  txtCairoRegular25: "font-cairo font-normal",
  txtCairoRegular24: "font-cairo font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtCairoBold24: "font-bold font-cairo",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14GreenA700: "font-inter font-medium",
  txtCairoRegular20: "font-cairo font-normal",
  txtCairoSemiBold20: "font-cairo font-semibold",
  txtCairoBold16: "font-bold font-cairo",
  txtInterMedium20: "font-inter font-medium",
  txtCairoRegular20WhiteA700: "font-cairo font-normal",
  txtHelveticaNeueBold24: "font-bold font-helveticaneue",
  txtInterMedium20Red600: "font-inter font-medium",
  txtCairoSemiBold40: "font-cairo font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
