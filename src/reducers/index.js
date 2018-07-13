import { 
  ADD_TO_DO, 
  TOGGLE_ADD_TO_DO_FORM, 
  CHANGE_TO_DO_STATUS, 
  FETCH_TASKS_SUCCEEDED
} from '../actions/index';

const intialState = {
  tasks: [],
  addToDoFormShown: false
}


export default function root(state=intialState, action){
  switch(action.type){

    case FETCH_TASKS_SUCCEEDED:
      return Object.assign({}, state, {tasks: action.payload.tasks});

    case ADD_TO_DO:
      return Object.assign({}, state, {tasks: state.tasks.concat(
        {
          title: action.payload.title,
          description: action.payload.description,
          status: 'TO DO',
          id: state.tasks.length + 1
        }
      )});

    case TOGGLE_ADD_TO_DO_FORM:
      return Object.assign({}, state, {addToDoFormShown: !state.addToDoFormShown})

    case CHANGE_TO_DO_STATUS:
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
