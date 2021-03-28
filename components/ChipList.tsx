import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 3,
  },
});

interface Item {
  key: string;
  value: string;
  closeFunc: (key: string, value: string) => void;
}

const renderChip: React.FC<Item> = ({ key, value, closeFunc }) => {
  return (
    <Chip style={styles.chip} key={key} onClose={() => closeFunc(key, value)}>
      {value}
    </Chip>
  );
};

export interface Props {
  items: Item[];
  addButtonText: string;
}

const ChipList: React.FC<Props> = ({ items, addButtonText }) => {
  return (
    <View style={styles.container}>
      {items.map(renderChip)}
      <Chip style={styles.chip} onPress={() => console.log('add')} icon="plus">
        {addButtonText}
      </Chip>
    </View>
  );
};

export default ChipList;
