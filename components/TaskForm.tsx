import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface Props {
  handleAddNewTask: (text: string) => void;
}

const TaskForm: React.FC<Props> = ({handleAddNewTask}) => {
  const [text, setText] = React.useState<string>('');

  const handleSubmit = () => {
    if (text.length === 0) {
      Alert.alert('Error', 'please enter a item', {text: 'okie'});
    } else {
      handleAddNewTask(text);
      setText('');
    }
  };

  const handleChange = (value: string) => setText(value);
  // const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
  //   setText(e);

  return (
    <View style={styles.addTask}>
      <Text style={styles.title}>Add New Task</Text>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTask: {
    padding: 5,
  },
  title: {
    fontSize: 17,
  },
  input: {
    height: 60,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.99,
    shadowRadius: 4.65,

    elevation: 7,
  },
  btn: {
    padding: 9,
    margin: 5,
    color: '#333',
    backgroundColor: 'rgba(0, 163, 136,0.3)',
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
export default TaskForm;
