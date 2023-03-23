import React, { useState, useEffect } from "react";
import Workout from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      setWorkouts(data);
    };
    getWorkouts();
  }, [workouts]);

  return (
    <div className="home">
      <div className="">
        {workouts &&
          workouts.map((workout) => (
            <Workout key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
