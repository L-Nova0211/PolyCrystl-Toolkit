import React from "react";
import JewelsLogo from "./JewelsLogo";

export default {
  title: "Components/JewelsLogo",
  component: JewelsLogo,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <JewelsLogo />
    </>
  );
};
