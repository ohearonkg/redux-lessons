import { GET_TODOS, ADD_TO_DO, TOGGLE_ADD_TO_DO_FORM } from '../actions/index';

const sampleTasks = [
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO',
    id: 1
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO',
    id: 2
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO',
    id: 3
  },
  {
    title: 'In Progress Task',
    description: 'some great task',
    status: 'IN PROGRESS',
    id: 4,
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE',
    id: 5
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE',
    id: 6
  }
]

const intialState = {
  tasks: [],
  addToDoFormShown: false
}


export default function root(state=intialState, action){
  switch(action.type){
    case GET_TODOS:
      return Object.assign({}, state, {tasks: sampleTasks});
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
    default:
      return state;
  }
}
