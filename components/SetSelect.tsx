import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

import SwipeList from './SwipeList';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
  },
  title: {},
  icon: {
    margin: 0,
    marginTop: 4,
    padding: 0,
    height: 20,
  },
});

interface ItemProps {
  value: string;
  selected: boolean;
  toggleItem: (value: string) => void;
}

const Item: React.FC<ItemProps> = ({ value, selected, toggleItem }) => {
  return (
    <List.Item
      title={value}
      titleStyle={styles.title}
      style={styles.item}
      onPress={() => toggleItem(value)}
      right={() =>
        selected ? <List.Icon style={styles.icon} icon="check" /> : null
      }
    />
  );
};

export interface Item {
  value: string;
  selected: boolean;
}

export interface Props {
  items: Item[];
  deleteItem: (value: string) => void;
  toggleItem: (value: string) => void;
}

const SetSelect: React.FC<Props> = ({ items, deleteItem, toggleItem }) => {
  const rendered = items.map(item => {
    return {
      node: (
        <Item
          value={item.value}
          selected={item.selected}
          toggleItem={toggleItem}
        />
      ),
      key: item.value,
    };
  });

  const actions = [
    {
      backgroundColor: 'red',
      icon: 'trash-can',
      iconColor: 'white',
      onPress: (value: string) => {
        deleteItem(value);
      },
    },
  ];

  return <SwipeList items={rendered} actions={actions} />;
};

export default SetSelect;
