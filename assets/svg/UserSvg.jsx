import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const UserSvg = (props) => (
  <Svg
    fill="#cdcdcd"
    width="24px"
    height="24px"
    viewBox="0 0 1.08 1.08"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M0.918 0.736a0.515 0.515 0 0 0 -0.757 0 0.045 0.045 0 0 0 -0.012 0.03v0.18A0.045 0.045 0 0 0 0.195 0.99h0.69a0.045 0.045 0 0 0 0.045 -0.045v-0.18a0.045 0.045 0 0 0 -0.012 -0.029"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <Path
      cx={18}
      cy={10}
      r={7}
      className="clr-i-solid clr-i-solid-path-2"
      d="M0.75 0.3A0.21 0.21 0 0 1 0.54 0.51A0.21 0.21 0 0 1 0.33 0.3A0.21 0.21 0 0 1 0.75 0.3z"
    />
    <Path
      x={0}
      y={0}
      width={36}
      height={36}
      fillOpacity={0}
      d="M0 0H1.08V1.08H0V0z"
    />
  </Svg>
);
export default UserSvg;
