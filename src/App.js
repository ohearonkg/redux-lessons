import React, { Component } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard/TaskBoard';
import {connect} from 'react-redux';
import {getToDos} from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchToDos();
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
    fetchToDos: () => dispatch(getToDos())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
