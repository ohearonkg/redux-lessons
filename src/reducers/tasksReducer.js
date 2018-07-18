import { 
  FETCH_TASKS_STARTED,
  FETCH_TASKS_SUCCEEDED,
  FETCH_TASKS_ERROR,

  CREATE_TASK_STARTED,
  CREATE_TASK_SUCCEEDED,
  CREATE_TASK_ERROR,

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
      return {
        ...state, 
        loading: true
      }
   
    case FETCH_TASKS_ERROR:
      return {
        ...state,
        error: action.error
      }

    case FETCH_TASKS_SUCCEEDED:
      return {
        ...state, 
        tasks: action.response.data, 
        loading: false
      }

    case CREATE_TASK_STARTED:
      return {
        ...state,
        loading: true
      }

    case CREATE_TASK_SUCCEEDED:
      return {
        ...state, 
        tasks: state.tasks.concat({
          title: action.response.data.title,
          description: action.response.data.description,
          status: action.response.data.status,
          id: action.response.data.id
        }),
        loading: false
      }
    
      case CREATE_TASK_ERROR:
        return {
          ...state,
          error: action.error
        }

    case TOGGLE_ADD_TO_DO_FORM:
      return {
        ...state, 
        addToDoFormShown: !state.addToDoFormShown
      }

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
