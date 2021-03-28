import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import * as Haptics from 'expo-haptics';

const AnimatedIconButton = Animated.createAnimatedComponent(IconButton);

const styles = StyleSheet.create({
  rightAction: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 0,
    color: '#fff',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
});

interface Item {
  key: string;
  value: string;
  deleteFunc: (key: string, value: string) => void;
}

const renderSwipeable: React.FC<Item> = ({ key, value, deleteFunc }) => {
  const deleteFuncWrapper = () => {
    deleteFunc(key, value);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ): React.ReactNode => {
    dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.rightAction}>
        <AnimatedIconButton
          icon="trash-can"
          color="#fff"
          onPress={deleteFuncWrapper}
          style={styles.actionIcon}
        />
      </View>
    );
  };

  return (
    <Swipeable
      friction={2}
      rightThreshold={121}
      renderRightActions={renderRightActions}
      overshootFriction={8}
      onSwipeableRightOpen={deleteFuncWrapper}
      key={key}
    >
      {value}
    </Swipeable>
  );
};

export interface Props {
  items: any[];
  renderFunc: (item: any) => Item;
}

const SwipeDeleteList: React.FC<Props> = ({ items, renderFunc }) => {
  return <View>{items.map(item => renderSwipeable(renderFunc(item)))}</View>;
};

export default SwipeDeleteList;
