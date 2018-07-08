import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard/TaskBoard';

const sampleStatuses = ['To Do', 'In Progress', 'Completed'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskBoard  statuses={sampleStatuses} />
      </div>
    );
  }
}

export default App;
