/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PlatformPressable} from '@react-navigation/elements';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import HomeIcon from '../assets/svg/Home';
import AddIcon from '../assets/svg/Add';
import UserIcon from '../assets/svg/User';
import {commonColors} from '../assets/theme/colors';

const icon: any = {
  Home: (props: any) => <HomeIcon {...props} />,
  New: (props: any) => <AddIcon {...props} />,
  Profile: (props: any) => <UserIcon {...props} />,
};

export function BottomTabs({
  isFocused,
  options,
  onPress,
  onLongPress,
  route,
}: {
  readonly isFocused: boolean;
  readonly options: any;
  readonly onPress: () => void;
  readonly onLongPress: () => void;
  readonly route: any;
}) {
  const {buildHref} = useLinkBuilder();
  const {colors} = useTheme();
  const scale = useSharedValue(0);
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });
  const animatedIconStyle = useAnimatedStyle(() => {
    const top = interpolate(scale.value, [0, 1], [0, 11]);
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.3]);
    return {
      transform: [{scale: scaleValue}],
      top,
    };
  });

  // Updating the value with animation
  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {duration: 500});
  }, [isFocused]);

  let label;
  if (typeof options.tabBarLabel === 'string') {
    label = options.tabBarLabel;
  } else {
    label = options.title ?? route.name;
  }

  return (
    <PlatformPressable
      href={buildHref(route.name, route.params)}
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarButtonTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={style.tabbarItem}
      key={route.key}>
      <Animated.View style={animatedIconStyle}>
        {icon[route.name](
          isFocused ? {color: commonColors.white} : {color: colors.text},
          animatedIconStyle,
        )}
      </Animated.View>
      <Animated.Text style={[{color: colors.text}, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </PlatformPressable>
  );
}

const style = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
