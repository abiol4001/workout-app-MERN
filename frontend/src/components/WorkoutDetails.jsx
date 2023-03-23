import React from 'react'

const Workout = ({workout}) => {
  return (
    <div className="workout-details">
      <h3>{workout.title}</h3>
      <p>
        <strong>Load (in kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
    </div>
  );
}

export default Workout