import { GET_TODOS, ADD_TO_DO } from '../actions/index';

const sampleTasks = [
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'A Todo Task',
    description: 'some great task',
    status: 'TO DO'
  },
  {
    title: 'In Progress Task',
    description: 'some great task',
    status: 'IN PROGRESS'
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE'
  },
  {
    title: 'Done Task',
    description: 'this one is done',
    status: 'DONE'
  }
]

const intialState = {
  tasks: [],
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
          status: 'TO DO'
        }
      )});
    default:
      return state;
  }
}
