import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Function to get all tasks
 */
export function fetchTasks() {
  return client.get('/tasks');
}

/**
 * Function to save new task
 */
export function createTask(title,description) {
  return client.post('/tasks',
    {
      title,
      description,
      status: 'TO DO'
    }
  )
}