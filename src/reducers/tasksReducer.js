import { 
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCEEDED,
  FETCH_TASKS_ERROR,
  CREATE_TASK_SUCCEEDED,
  TOGGLE_ADD_TO_DO_FORM, 
  UPDATE_TASK_STATUS_SUCCEEDED,
} from '../actions';

const intialState = {
  tasks: [],
  addToDoFormShown: false,
  loading: false,
  error: null
}

export default function root(state=intialState, action){
  switch(action.type){

    case FETCH_TASKS_STARTED:
      return Object.assign({}, state, {loading: true});
   
    case FETCH_TASKS_ERROR:
      return Object.assign({}, state, {error: action.payload.error})

    case FETCH_TASKS_SUCCEEDED:
      return Object.assign({}, state, {tasks: action.payload.tasks, loading: false});

    case CREATE_TASK_SUCCEEDED:
      return Object.assign({}, state, {tasks: state.tasks.concat(
        {
          title: action.payload.task.title,
          description: action.payload.task.description,
          status: action.payload.task.status,
          id: action.payload.task.id
        }
      )});

    case TOGGLE_ADD_TO_DO_FORM:
      return Object.assign({}, state, {addToDoFormShown: !state.addToDoFormShown})

    case UPDATE_TASK_STATUS_SUCCEEDED:
      const { payload } = action;
      return {
        tasks: state.tasks.map( task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, {status: payload.newStatus})
          } 
          return task;
        })
      }

    default:
      return state;
  }
}
