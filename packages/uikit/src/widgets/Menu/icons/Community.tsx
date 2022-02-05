import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props} style={{ marginRight: "8px" }}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            data-name="ic public 24px"
            d="M10 0a10 10 0 1010 10A10 10 0 0010 0zM9 17.93A8 8 0 012 10a7.75 7.75 0 01.21-1.79L7 13v1a2 2 0 002 2zm6.9-2.54A2 2 0 0014 14h-1v-3a1 1 0 00-1-1H6V8h2a1 1 0 001-1V5h2a2 2 0 002-2v-.41a8 8 0 012.9 12.8z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;
