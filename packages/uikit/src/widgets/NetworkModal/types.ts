import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export interface Config {
  networkName: string;
  icon: FC<SvgProps>;
  url: string;
}
