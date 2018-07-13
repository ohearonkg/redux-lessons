import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard/TaskBoard';
import {connect} from 'react-redux';
import {fetchTasks} from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="App">
        <TaskBoard tasks={this.props.tasks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
