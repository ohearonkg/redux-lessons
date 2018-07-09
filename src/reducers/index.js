import { GET_TODOS } from '../actions/index';

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
      return Object.assign({}, state, {tasks: sampleTasks})
    default:
      return state;
  }
}
