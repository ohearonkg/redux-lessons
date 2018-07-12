import { GET_TODOS, ADD_TO_DO, TOGGLE_ADD_TO_DO_FORM, CHANGE_TO_DO_STATUS } from '../actions/index';

const sampleTasks = [
  {
    title: 'A Todo Task 1',
    description: 'some great task',
    status: 'TO DO',
    id: 1
  },
  {
    title: 'A Todo Task 2',
    description: 'some great task',
    status: 'TO DO',
    id: 2
  },
  {
    title: 'A Todo Task 3',
    description: 'some great task',
    status: 'TO DO',
    id: 3
  },
  {
    title: 'In Progress Task 4',
    description: 'some great task',
    status: 'IN PROGRESS',
    id: 4,
  },
  {
    title: 'Done Task 5',
    description: 'this one is done',
    status: 'DONE',
    id: 5
  },
  {
    title: 'Done Task 6',
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
