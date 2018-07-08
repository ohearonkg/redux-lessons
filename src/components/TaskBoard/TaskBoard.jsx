import React from 'react';
import TaskList from '../TaskList/TaskList';
import styled from 'styled-components';

const sampleTasks = [
  {
    title: 'Some Task 1'
  },
  {
    title: 'Some Task 2'
  }
]

const TaskBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TaskColumnWrapper = styled.div`
  flex: 1 1 auto;
`;

const TaskColumnTitle = styled.h2`
  text-transform: uppercase;
`;

const TaskBoard = props => {
  return (
    <TaskBoardWrapper>
      {props.statuses.map( (status,index) => {
        return (
          <TaskColumnWrapper>
            <TaskColumnTitle> {status} </TaskColumnTitle>
            <TaskList tasks={sampleTasks} />
          </TaskColumnWrapper>
        )
      })}
    </TaskBoardWrapper>
  )
}

export default TaskBoard;