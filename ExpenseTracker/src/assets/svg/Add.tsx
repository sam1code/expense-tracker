import React from 'react';
import Svg, {Circle, Line} from 'react-native-svg';

const PlusCircleIcon = ({color = 'currentColor'}) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color} // Use the color prop for stroke
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Circle cx="12" cy="12" r="10" />
    <Line x1="12" y1="8" x2="12" y2="16" />
    <Line x1="8" y1="12" x2="16" y2="12" />
  </Svg>
);

export default PlusCircleIcon;
