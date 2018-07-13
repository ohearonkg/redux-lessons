import * as api from '../api/index';

const TOGGLE_ADD_TO_DO_FORM =  'TOGGLE_ADD_TO_DO_FORM';
const CHANGE_TO_DO_STATUS =  'CHANGE_TO_DO_STATUS';
const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED';
const CREATE_TASK_SUCCEEDED = 'CREATE_TASK_SUCCEEDED';

/**
 * Async action creator to fetch
 * the tasks from our API
 */
const fetchTasks = () => {
  return dispatch => {
    api.fetchTasks().then(res => {
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

/**
 * Async action creator to add a task
 * to our API endpoint.
 */
const createTask = (title,description) => {
  return dispatch => {
    api.createTask(title,description).then(
      res => {
        console.log(res.data);
        dispatch(createTaskSucceeded(res.data));
      }
    )
  }
}


const createTaskSucceeded = (task) => {
  return {
    type: CREATE_TASK_SUCCEEDED,
    payload: {
      task
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
  fetchTasks, 
  FETCH_TASKS_SUCCEEDED,
  fetchTasksSucceeded,
  createTask,
  CREATE_TASK_SUCCEEDED,
  toggleAddToDoForm,
  TOGGLE_ADD_TO_DO_FORM,
  changeToDoStatus,
  CHANGE_TO_DO_STATUS,
  }