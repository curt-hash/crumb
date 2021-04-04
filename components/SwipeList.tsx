import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  actionView: {
    flex: 1,
    transform: [
      {
        translateX: 0,
      },
    ],
  },
  action: {
    width: 48,
    margin: 0,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 0,
  },
});

interface SwipeItemProps {
  nodeKey: string;
  actions: Action[];
}

const SwipeItem: React.FC<SwipeItemProps> = ({
  nodeKey,
  actions,
  children,
}) => {
  const width = 48 * actions.length;
  let x = width;

  const renderRightAction = (
    action: Action,
    progress: Animated.AnimatedInterpolation,
  ): React.ReactNode => {
    progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    x -= 48;

    return (
      <Animated.View style={styles.actionView}>
        <IconButton
          icon={action.icon}
          color={action.iconColor}
          onPress={() => action.onPress(nodeKey)}
          style={[styles.action, { backgroundColor: action.backgroundColor }]}
        />
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation) => (
    <View style={[styles.view, { width }]}>
      {actions.map(action => renderRightAction(action, progress))}
    </View>
  );

  return (
    <Swipeable
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

export interface Item {
  node: React.ReactNode;
  key: string;
}

export interface Action {
  backgroundColor: string;
  icon: string;
  iconColor: string;
  onPress: (key: string) => void;
}

export interface Props {
  items: Item[];
  actions: Action[];
}

const SwipeList: React.FC<Props> = ({ items, actions }) => {
  return (
    <View>
      {items.map(item => (
        <SwipeItem key={item.key} nodeKey={item.key} actions={actions}>
          {item.node}
        </SwipeItem>
      ))}
    </View>
  );
};

export default SwipeList;
