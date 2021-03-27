import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

const renderSwipeable = ({ key, value, deleteItem }): JSX.Element => {
  const renderRightActions = (progress, dragX) => {
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
          onPress={() => deleteItem(key)}
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
      onSwipeableRightOpen={() => deleteItem(key)}
      key={key}
    >
      {value}
    </Swipeable>
  );
};

export default SwipeDeleteList = ({
  items,
  renderItem,
  deleteItem,
}): JSX.Element => {
  return (
    <View>
      {items.map(item =>
        renderSwipeable({
          ...renderItem(item),
          deleteItem,
        }),
      )}
    </View>
  );
};
