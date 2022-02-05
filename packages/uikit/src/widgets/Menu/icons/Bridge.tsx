import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props} style={{ marginRight: "8px" }}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            data-name="ic swap vertical circle 24px"
            d="M10 0a10 10 0 1010 10A10 10 0 0010 0zM4.5 7L8 3.5 11.5 7H9v4H7V7zm11 6L12 16.5 8.5 13H11V9h2v4z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
