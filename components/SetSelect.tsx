import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

import SwipeDeleteList from './SwipeDeleteList';

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

export interface Item {
  value: string;
  key: string;
  selected: boolean;
}

export interface Props {
  items: Item[];
  deleteItem: (key: string) => void;
  toggleItem: (key: string) => void;
}

const SetSelect: React.FC<Props> = ({ items, deleteItem, toggleItem }) => {
  return (
    <SwipeDeleteList
      items={items}
      keyItem={(item: Item) => item.key}
      renderItem={(item: Item) => {
        return (
          <List.Item
            title={item.value}
            titleStyle={styles.title}
            style={styles.item}
            onPress={() => toggleItem(item.key)}
            right={() => {
              if (item.selected) {
                return <List.Icon style={styles.icon} icon="check" />;
              }

              return null;
            }}
          />
        );
      }}
      deleteItem={deleteItem}
    />
  );
};

export default SetSelect;
