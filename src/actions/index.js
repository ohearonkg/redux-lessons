const GET_TODOS = 'GET_TODOS';
const ADD_TO_DO = 'ADD_TO_DO';
const TOGGLE_ADD_TO_DO_FORM =  'TOGGLE_ADD_TO_DO_FORM';

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

const toggleAddToDoForm = () => {
  return {
    type: TOGGLE_ADD_TO_DO_FORM
  }
}

export {
  GET_TODOS,
  getToDos, 
  ADD_TO_DO,
  addToDo,
  TOGGLE_ADD_TO_DO_FORM,
  toggleAddToDoForm
}