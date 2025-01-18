import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const UserIcon = ({color = 'currentColor', size = 24}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color} // Use the color prop for stroke
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx="12" cy="7" r="4" />
  </Svg>
);

export default UserIcon;
