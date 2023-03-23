import React, { useState } from "react";

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const workoutPost = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutPost)
        })
        const json = await response.json()
        
        if(!response.ok) {
            setError(json.error)
            console.log(json.error)
        }
        if(response.ok) {
            setError(null)
            setTitle("");
            setLoad("");
            setReps("");
        }
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>
        <label>Excercise Title: </label>
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Load (in kg):</label>
        <input
          type="number"
          name="load"
          id=""
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Reps:</label>
        <input
          type="number"
          name="reps"
          id=""
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button>Add</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WorkoutForm;
