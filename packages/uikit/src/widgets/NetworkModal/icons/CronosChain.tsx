import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <defs>
        <clipPath id="prefix__clip-path">
          <circle
            id="prefix__Ellipse_1935"
            data-name="Ellipse 1935"
            className="prefix__cls-1"
            fill="white"
            cx={14}
            cy={14}
            r={14}
            transform="translate(18508.988 -23990.012)"
          />
        </clipPath>
      </defs>
      <g id="prefix__Group_10824" data-name="Group 10824" transform="translate(-18509 23990)">
        <circle
          id="prefix__Ellipse_1934"
          data-name="Ellipse 1934"
          cx={16}
          cy={16}
          r={16}
          transform="translate(18509 -23990)"
          fill="black"
        />
        <g
          id="prefix__Mask_Group_352"
          data-name="Mask Group 352"
          transform="translate(2.012 2.012)"
          clipPath="url(#prefix__clip-path)"
        >
          <g id="prefix__cronos" transform="translate(18510.852 -23990)">
            <path
              id="prefix__Path_18472"
              data-name="Path 18472"
              fill="white"
              d="M11.966 0L0 6.909v13.814l11.966 6.9 11.957-6.9V6.909zm8.414 18.676l-8.414 4.858-8.419-4.858V8.951l8.419-4.858 8.414 4.858z"
            />
            <path
              id="prefix__Path_18473"
              data-name="Path 18473"
              d="M13.86 27.628l11.957-6.9V6.909L13.86 0v4.1l8.414 4.858v9.725l-8.414 4.851z"
              transform="translate(-1.894)"
              style={{
                mixBlendMode: "multiply",
                isolation: "isolate",
              }}
              fill="transparent"
            />
            <path
              id="prefix__Path_18474"
              data-name="Path 18474"
              fill="white"
              d="M18.555 18.207L12.97 21.43l-5.59-3.223v-6.451l5.59-3.228 5.585 3.228L16.23 13.1l-3.26-1.885L9.71 13.1v3.76l3.26 1.885 3.26-1.885z"
              transform="translate(-1.008 -1.165)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
