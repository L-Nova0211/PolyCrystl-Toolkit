import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.189 360.892" {...props} style={{ marginRight: "8px" }}>
      <path
        d="M481.189 360.892H421.04l20.05-60.149h20.05zm-260.163-91.085l179.965-91.727v122.663c-20.19 40.921-112.418 60.149-170.421 60.149-63.657 0-148.146-19.929-170.421-60.149V168.135zm240.113 10.887H441.09v-145.56l-219 111.636L0 106.423 240.594 0l220.545 124.929z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;
