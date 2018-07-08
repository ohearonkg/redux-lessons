import React from 'react';
import TaskList from '../TaskList/TaskList';
import styled from 'styled-components';

const sampleTasks = [
  {
    title: 'Some Task 1',
    description: 'some great task'
  },
  {
    title: 'Some Task 2',
    description: 'another great task'
  }
]

const TaskBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const TaskColumnWrapper = styled.div`
  flex: 1 1 auto;
  padding: 0 20px;
`;

const TaskColumnTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const TaskBoard = props => {
  const {statuses} = props;
  return (
    <TaskBoardWrapper>
      {statuses.map( (status,index) => {
        return (
          <TaskColumnWrapper key={index}>
            <TaskColumnTitle> {status} </TaskColumnTitle>
            <TaskList tasks={sampleTasks} />
          </TaskColumnWrapper>
        )
      })}
    </TaskBoardWrapper>
  )
}

export default TaskBoard;