import React from 'react';
import Svg, {Path, Polyline} from 'react-native-svg';

const HomeIcon = ({color = 'currentColor'}) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color} // Use the color prop for stroke
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Polyline points="9 22 9 12 15 12 15 22" />
  </Svg>
);

export default HomeIcon;
