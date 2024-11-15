import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

export default function HomeScreen({navigation}: {navigation: any}) {
  const [tasks, setTasks] = useState<string[]>([
    'Do Laundry',
    'Go to gym',
    'Walk dog',
  ]);
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  return (
    <MainLayout>
      <View style={styles.view}>
        <View style={styles.innerView}>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.button}>
          <Text style={styles.text}>Go to About</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,
    padding: 4,
    gap: 8,
    backgroundColor: '#bababa',
  },
  innerView: {
    height: '70%',
    width: '100%',

    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,
    padding: 4,
    backgroundColor: '#bababa',
  },
  button: {
    width: 150,
    height: 75,
    borderLeftColor: '#969696',
    borderTopColor: '#c8c8c8',
    borderRightColor: '#c8c8c8',
    borderBottomColor: '#969696',
    borderWidth: 4,
    padding: 4,
    backgroundColor: '#bababa',
  },
  text: {
    fontSize: 20,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
