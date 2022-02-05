import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" {...props} style={{ marginRight: "8px" }}>
      <g data-name="Layer 2">
        <path
          d="M24 2.88L18 4.1l1.72 1.7-5.36 5.36-3-3L4 15.4l1.41 1.42L11.36 11l3 3 6.78-6.76 1.66 1.64zM24 20v2H0V0h2v20z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
