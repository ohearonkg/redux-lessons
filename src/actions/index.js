import * as api from '../api';
import { CALL_API } from '../middleware/api';

const FETCH_TASKS_STARTED = 'FETCH_TASKS_STARTED';
const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED';
const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

const TOGGLE_ADD_TO_DO_FORM =  'TOGGLE_ADD_TO_DO_FORM';

const CREATE_TASK_STARTED = 'CREATE_TASK_STARTED'
const CREATE_TASK_SUCCEEDED = 'CREATE_TASK_SUCCEEDED';
const CREATE_TASK_ERROR = 'CREATE_TASK_ERROR'

const UPDATE_TASK_STATUS_SUCCEEDED = 'UPDATE_TASK_STATUS_SUCCEEDED';

/**
 * Async action creator to fetch
 * the tasks from our API
 */
const fetchTasks = () => {
  return {
    [CALL_API]: {
      types: [FETCH_TASKS_STARTED, FETCH_TASKS_SUCCEEDED, FETCH_TASKS_ERROR],
      endpoint: '/tasks'
    }
  }
}

/**
 * Async action creator to add a task
 * to our API endpoint.
 */
const createTask = (title,description) => {
  return {
    [CALL_API]: {
      types: [CREATE_TASK_STARTED, CREATE_TASK_SUCCEEDED, CREATE_TASK_ERROR],
      endpoint: '/tasks',
      method: 'POST',
      body: {
        title,
        description,
        status: 'TO DO'
      }
    }
  }
}

const toggleAddToDoForm = () => {
  return {
    type: TOGGLE_ADD_TO_DO_FORM
  }
}

const updateTaskStatus = (id, title, description, newStatus) => {
  return dispatch => {
    api.updateTaskStatus(id, title, description, newStatus)
    .then(res => {
      dispatch(updateTaskStatusSucceeded(res.data.id, res.data.status));
    });
  }
}

const updateTaskStatusSucceeded = (id,newStatus) => {
  return {
    type: UPDATE_TASK_STATUS_SUCCEEDED,
    payload: {
      id,
      newStatus
    }
  }
}


export {
  fetchTasks, 
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCEEDED,
  FETCH_TASKS_ERROR,

  createTask,
  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCEEDED,
  CREATE_TASK_ERROR,

  toggleAddToDoForm,
  TOGGLE_ADD_TO_DO_FORM,
  updateTaskStatus,
  UPDATE_TASK_STATUS_SUCCEEDED
  }