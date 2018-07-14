import React from 'react';
import styled from 'styled-components';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { toggleAddToDoForm } from '../../actions/index';

const sampleStatuses = ['TO DO', 'IN PROGRESS', 'DONE']

const TaskBoardWrapper = styled.div`
  padding: 20px;
`;

const AddToDoButtonWrapper = styled.div`
  text-align: right;
`;

const TaskBoardColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const TaskColumnWrapper = styled.div`
  flex: 1 1 auto;

  &:nth-child(n+2){
    padding-left: 20px;
  }
`;

const TaskColumnTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const TaskBoard = props => {
  return (
    <TaskBoardWrapper>

      {!props.addToDoFormShown && 
        <React.Fragment>
          <AddToDoButtonWrapper>
            <CustomButton text="Add To Do" onClickFunction={props.toggleAddToDoForm} />
          </AddToDoButtonWrapper>

          <TaskBoardColumnsWrapper>
            {sampleStatuses.map( (status,index) => {
              return (
                <TaskColumnWrapper key={index}>
                  <TaskColumnTitle> {status} </TaskColumnTitle>
                  <TaskList tasks={props.tasks.filter( task => task.status === status)} />
                </TaskColumnWrapper>
              )
            })}
          </TaskBoardColumnsWrapper>
        </React.Fragment>
      }

      {props.addToDoFormShown && 
        <NewTaskForm />
      }
      
    </TaskBoardWrapper>
  )
}

const mapStateToProps = state => {
  return {
    addToDoFormShown: state.addToDoFormShown,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAddToDoForm: () => dispatch(toggleAddToDoForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);