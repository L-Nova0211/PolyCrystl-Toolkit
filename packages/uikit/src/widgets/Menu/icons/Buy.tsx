import * as React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.434 146.285" {...props} style={{ marginRight: "8px" }}>
      <path d="M69.66 55.728h13.932V34.83h20.9V20.9h-20.9V0H69.66v20.9h-20.9v13.93h20.9zM41.8 118.421a13.932 13.932 0 1013.932 13.932A13.913 13.913 0 0041.8 118.421zm69.66 0a13.932 13.932 0 1013.932 13.932 13.913 13.913 0 00-13.937-13.932zM42.98 95.782l.209-.836 6.269-11.355h51.9a13.866 13.866 0 0012.19-7.175l26.889-48.831-12.124-6.685h-.07l-7.662 13.93-19.226 34.83h-48.9l-.906-1.881L35.944 34.83 29.327 20.9 22.779 6.966H0V20.9h13.932l25.077 52.87-9.4 17.067a13.468 13.468 0 00-1.741 6.687A13.973 13.973 0 0041.8 111.455h83.592V97.523H44.721a1.769 1.769 0 01-1.741-1.741z" />
    </svg>
  );
}

export default SvgComponent;
