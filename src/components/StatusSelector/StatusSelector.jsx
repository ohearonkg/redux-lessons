import React from 'react';

const sampleStatuses = ['TO DO', 'IN PROGRESS', 'DONE']

const StatusSelector = props => {
  /**
   * Getting value of selected status
   * and passing to the function
   * passed in via its statusChangedFunction 
   * prop
   */
  const _handleChange = (e) => {
    props.statusChangedFunction(e.target.value);
  }

  return (
    <form>
      <label>
        Status:
        <select onChange={_handleChange.bind(this)} value={props.status}>
          {sampleStatuses.map( (status,index) => {
            return (
              <option key={index}>
                {status}
              </option>
            )
          })}
        </select>
      </label>
    </form>
  )
}

export default StatusSelector;