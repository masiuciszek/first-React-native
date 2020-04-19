import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  task: ITasks;
  handleDelete: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({task, handleDelete}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.wrapper}>
        <Text style={styles.itemText}>{task.text}</Text>
        <Text style={styles.delete} onPress={() => handleDelete(task.id)}>
          Delete
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eff0f0',
    padding: 20,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.99,
    shadowRadius: 4.65,

    elevation: 7,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    width: 200,
  },
  delete: {
    color: '#444433',
    width: 80,
  },
});

export default TaskItem;
