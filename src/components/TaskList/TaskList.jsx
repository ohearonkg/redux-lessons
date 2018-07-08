import React from 'react';
import Task from '../Task/Task';

const TaskList = props => {
  return (
    <div>
      {props.tasks.map( (task,index) => 
          <Task key={index} title={task.title} />
      )}
    </div>
  ) 
}

export default TaskList;