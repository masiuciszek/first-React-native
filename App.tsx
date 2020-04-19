import React from 'react';

interface Props {}

import {StyleSheet, View, FlatList} from 'react-native';
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
// import uuid from 'uuid/v4';

const App: React.FC<Props> = () => {
  const [tasks, setTasks] = React.useState<ITasks[]>([
    {
      id: 'sadasdas',
      text: 'Walk the dog',
      completed: false,
    },
    {
      id: 'asdasda',
      text: 'Cook some food',
      completed: false,
    },
    {
      id: 'sdasda',
      text: 'Take a shower',
      completed: true,
    },
  ]);

  const handleDelete = (id: string): void => {
    // STATE BEFORE WE CHANGE IT
    setTasks((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const handleAddNewTask = (text: string): void => {
    setTasks((prevState) => {
      return [...prevState, {id: '2312sadsa', text, completed: false}];
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header title="Task List" title2="With React Native" />
        <TaskForm handleAddNewTask={handleAddNewTask} />
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <TaskItem task={item} handleDelete={handleDelete} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
