import React from 'react';
import styled from 'styled-components'

const TaskWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.75);
`;

const Task = props => <TaskWrapper> {props.title} </TaskWrapper>

export default Task;