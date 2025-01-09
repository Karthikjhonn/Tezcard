import * as React from "react";
import Svg, { G, Circle } from "react-native-svg";
const MasterSvg = (props) => (
  <Svg
    width="38px"
    height="38px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Circle cx={7} cy={12} r={7} fill="#EA001B" />
      <Circle cx={17} cy={12} r={7} fill="#FFA200" fillOpacity={0.8} />
    </G>
  </Svg>
);
export default MasterSvg;
