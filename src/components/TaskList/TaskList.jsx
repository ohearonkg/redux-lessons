import React from 'react';
import Task from '../Task/Task';
import styled from 'styled-components';

const TaskListWrapper = styled.div`
  margin-top: 10px;
`;

const TaskWrapper = styled.div`
  &:nth-child(n+2) {
    margin-top: 10px;
  }
`;

const TaskList = props => {
  if (props.tasks.length === 0) {
    return (
      <h1> Loading... </h1>
    )
  } else {
    return (
      <TaskListWrapper>
        {props.tasks.map( (task,index) => 
          <TaskWrapper key={index}>
            <Task id={task.id} title={task.title} description={task.description} status={task.status} />
          </TaskWrapper>
        )}
      </TaskListWrapper>
    ) 
  }
}

export default TaskList;