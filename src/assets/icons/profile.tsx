import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const ProfileIcon = (props: any) => (
  <Svg
    width={38}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={38} height={48} rx={12} fill="#625B39" />
    <Path
      d="M19 24.333c2.21 0 4-1.99 4-4.444 0-2.455-1.79-4.444-4-4.444s-4 1.99-4 4.444c0 2.454 1.79 4.444 4 4.444ZM27 31c0 2.7-4.073 1.778-8 1.778-3.927 0-8 .922-8-1.778s4.073-4.889 8-4.889c3.927 0 8 2.189 8 4.889Z"
      fill="#FFC542"
    />
  </Svg>
);

export default ProfileIcon;
