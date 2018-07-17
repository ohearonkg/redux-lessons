import axios from 'axios';

/**
 * This middleware is used to make
 * API requests
 */

export const CALL_API = 'CALL_API'
const BASE_URL = 'http://localhost:3001'

const apiMiddleware = store => next => action => {
  const callApi = action[CALL_API];

  /**
   * Should the action being dispatched
   * not be related to the API call
   * the next middleware on the action
   */
  if (typeof(callApi) === 'undefined') {
    return next(action);
  }

  /**
   * Should the action being dispatched
   * BE related to the API we call
   * the appropriate started action
   */
  const [requestStartedType, successType, failureType] = callApi.types;
  next({type: requestStartedType});

  /**
   * We then make the actual API
   * call to the desired endpoint
   */
  return makeCall(callApi.endpoint).then(
    /**
     * Should the result of the
     * call be successful we call
     * the next middleware with our
     * success type and payload
     */
    response => 
      next({
        type: successType,
        payload: response.data
      }),

    /**
     * Should the result of the call be unsuccessful
     * we call the next middleware with our failure
     * type and appropriate error message;
     */
    error => 
      next({
        type: failureType,
        error: error.message
      })
  )
}

/**
 * Simple function to return the result
 * from making an AJAX request to the given 
 * endpoint
 */
function makeCall(endpoint) {
  const url = `${BASE_URL}${endpoint}`;

  return axios.get(url)
    .then(resp => {
      return resp
    })
    .catch(err => {
      return err
    });
}

export default apiMiddleware;