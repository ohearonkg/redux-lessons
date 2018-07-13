import {fetchTasks} from '../api/index';

const ADD_TO_DO = 'ADD_TO_DO';
const TOGGLE_ADD_TO_DO_FORM =  'TOGGLE_ADD_TO_DO_FORM';
const CHANGE_TO_DO_STATUS =  'CHANGE_TO_DO_STATUS'
const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED'

const getToDos = () => {
  return dispatch => {
    fetchTasks().then(res => {
      dispatch(fetchTasksSucceeded(res.data));
    });
  }
}

const fetchTasksSucceeded = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCEEDED,
    payload: {
      tasks
    }
  }
}

const addToDo = (title,description) => {
  return {
    type: ADD_TO_DO,
    payload: {
      title,
      description
    }
  }
}

const toggleAddToDoForm = () => {
  return {
    type: TOGGLE_ADD_TO_DO_FORM
  }
}

const changeToDoStatus = (id, newStatus) => {
  return {
    type: CHANGE_TO_DO_STATUS,
    payload: {
      id,
      newStatus
    }
  }
}


export {
  getToDos, 
  ADD_TO_DO,
  addToDo,
  TOGGLE_ADD_TO_DO_FORM,
  toggleAddToDoForm,
  CHANGE_TO_DO_STATUS,
  changeToDoStatus,
  FETCH_TASKS_SUCCEEDED,
  fetchTasksSucceeded
}