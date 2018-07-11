import React from 'react';
import styled from 'styled-components'
import StatusSelector from '../StatusSelector/StatusSelector';

const TaskWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.75);
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.025);
    box-shadow: 0.5px 0.5px 15px 0px rgba(0,0,0,0.5);
  }
`;

const TaskTitleWrapper = styled.div`
  padding: 20px 20px 10px 20px;
`;

const TaskContentWrapper = styled.div`
  padding: 10px 20px 20px 20px;
`;

const TaskSectionDivider = styled.hr`
  height: 1px;
  background-color: grey;
  border: none;
  margin: 0;
`

const Task = props => {
  return (
    <TaskWrapper> 
      <StatusSelector />
      <TaskTitleWrapper>
        {props.title} 
      </TaskTitleWrapper>

      <TaskSectionDivider />
      
      <TaskContentWrapper>
        {props.description}
      </TaskContentWrapper>
    </TaskWrapper>
  )
}

export default Task;