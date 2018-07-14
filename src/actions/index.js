import * as api from '../api/index';

const FETCH_TASKS_STARTED = 'FETCH_TASKS_STARTED';
const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED';

const TOGGLE_ADD_TO_DO_FORM =  'TOGGLE_ADD_TO_DO_FORM';
const CREATE_TASK_SUCCEEDED = 'CREATE_TASK_SUCCEEDED';
const UPDATE_TASK_STATUS_SUCCEEDED = 'UPDATE_TASK_STATUS_SUCCEEDED';

/**
 * Async action creator to fetch
 * the tasks from our API
 */
const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStarted())

    api.fetchTasks().then(res => {
      setTimeout( () => {
        dispatch(fetchTasksSucceeded(res.data));
      }, 2500);
    });
  }
}

const fetchTasksStarted = () => {
  return {
    type: FETCH_TASKS_STARTED
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
  fetchTasksSucceeded,
  createTask,
  CREATE_TASK_SUCCEEDED,
  toggleAddToDoForm,
  TOGGLE_ADD_TO_DO_FORM,
  updateTaskStatus,
  UPDATE_TASK_STATUS_SUCCEEDED
  }