import React from "react";
import styled from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  const Effect = styled.span`
    &:hover {
      opacity: 0.6;
    }
  `;

  return (
    <Effect>
      <Svg viewBox="0 0 512 512" {...props} style={{ marginLeft: "-5px", marginTop: "3px" }}>
        <path d="M161.5 93.1c-39.9 1.4-89 4-95.4 5-12.8 2-24.4 7.8-34.5 17-15.7 14.4-23.8 41.5-26.5 89.4-3.7 63.8-1.5 139.4 4.9 173 2.4 12.4 6.9 25.7 11.3 33.5 6.1 10.9 18.9 21.4 31.2 25.5 16.5 5.5 32.5 7 94.5 9 122 3.9 107 3.8 190.5 1.1 87.7-2.9 94.6-3.2 107-5.1 31.9-5 49.6-21.8 57.9-55 5.5-22.3 7.4-45.5 8.3-102 .6-40.5-.3-69.3-3.2-99.5-3.8-40.3-13.3-63.1-31.8-76.1-12.1-8.5-25.2-11.3-64.7-13.9-38.5-2.5-198-3.8-249.5-1.9zm128.4 144.2c27.7 14.4 50.3 26.7 50.3 27.1-.1.7-133.6 70.6-134.8 70.6-.2 0-.4-32-.4-71v-71.1l17.3 9c9.4 5 39.9 20.9 67.6 35.4z" />
      </Svg>
    </Effect>
  );
};

export default Icon;
