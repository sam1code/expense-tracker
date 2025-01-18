import React, {useState} from 'react';
import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BottomTabs} from './components/BottomTabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: Readonly<BottomTabBarProps>) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const {colors} = useTheme();

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (event: LayoutChangeEvent) => {
    setDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: tabPositionX.value}],
  }));

  return (
    <View
      style={[
        styles.tab,
        {
          backgroundColor: colors.card,
        },
      ]}
      onLayout={onTabbarLayout}>
      {/* Animated Background Highlight */}
      <Animated.View
        style={[
          animatedStyle,
          styles.animatedHighlight,
          {
            height: dimensions.height - 15,
            width: buttonWidth - 25,
          },
        ]}
      />
      {/* Tabs */}
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(index * buttonWidth, {
            damping: 20,
            stiffness: 200,
          });
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabs
            key={route.key}
            options={options}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            route={route}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 3, // For Android
  },
  animatedHighlight: {
    position: 'absolute',
    backgroundColor: '#723FED',
    borderRadius: 30,
    marginHorizontal: 12,
  },
});
