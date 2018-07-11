import React from 'react';

const sampleStatuses = ['TO DO', 'IN PROGRESS', 'DONE']

const StatusSelector = props => {
  return (
    <form>
      <label>
        Status:
        <select>
          {sampleStatuses.map( (status,index) => {
            return (
                <option>
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