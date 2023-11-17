
  import React from 'react';
  import ToDoList from '../components/ToDoList';
  import ToDoForm from '../components/ToDoForm';
  import MainLayout from '../layouts/MainLayout';

  import { useState } from 'react';
  import { Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  return (
    <MainLayout>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask={addTask}/>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    </MainLayout>
  );
};

export default HomeScreen;
