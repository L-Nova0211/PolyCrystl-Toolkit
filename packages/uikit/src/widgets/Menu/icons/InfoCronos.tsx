import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} style={{ marginRight: "8px" }}>
      <g data-name="Layer 2">
        <path
          d="M12 2A10 10 0 112 12 10 10 0 0112 2zm0-2a12 12 0 1012 12A12 12 0 0012 0zm-2 16c.56-1.79 1.63-3.93 1.82-4.47.27-.79-.21-1.14-1.74.2l-.34-.64c1.74-1.89 5.33-2.32 4.11.62-.76 1.83-1.31 3.07-1.62 4-.46 1.39.69.83 1.82-.21.15.25.2.33.36.62C11.88 18.53 9.1 18.74 10 16zm4.74-8.17a1.3 1.3 0 01-1.76 0 1.14 1.14 0 01.16-1.66 1.3 1.3 0 011.76 0 1.14 1.14 0 01-.19 1.67z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
