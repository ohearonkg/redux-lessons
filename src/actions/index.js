const GET_TODOS = 'GET_TODOS';
const ADD_TO_DO = 'ADD_TO_DO';

const getToDos = () => {
  return {
    type: GET_TODOS
  }
}

const addToDo = (title,description) => {
  return {
    type: ADD_TO_DO,
    payload: {
      title,
      description
    }
  }
}

export {
  GET_TODOS,
  getToDos, 
  ADD_TO_DO,
  addToDo
}