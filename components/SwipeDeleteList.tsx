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

interface SwipeDeleteProps {
  deleteItem: () => void;
}

const SwipeDelete: React.FC<SwipeDeleteProps> = ({ deleteItem, children }) => {
  const deleteFuncWrapper = () => {
    deleteItem();
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
    >
      {children}
    </Swipeable>
  );
};

export interface Props {
  items: any[];
  keyItem: (item: any) => string;
  renderItem: (item: any) => React.ReactNode;
  deleteItem: (key: string) => void;
}

const SwipeDeleteList: React.FC<Props> = ({
  items,
  keyItem,
  renderItem,
  deleteItem,
}) => {
  return (
    <View>
      {items.map(item => {
        const key = keyItem(item);
        return (
          <SwipeDelete key={key} deleteItem={() => deleteItem(key)}>
            {renderItem(item)}
          </SwipeDelete>
        );
      })}
    </View>
  );
};

export default SwipeDeleteList;
