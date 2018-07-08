import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard/TaskBoard';

const sampleTasks = [
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'In Progress Task',
    description: 'some great task',
    status: 'IN PROGRESS'
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE'
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskBoard tasks={sampleTasks} />
      </div>
    );
  }
}

export default App;
