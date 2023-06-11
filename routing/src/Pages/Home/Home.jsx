import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        alert("Error Happened");
      });
  }, []);

  return (
    <div>
      {todos.map(({ name, description, deadline, isCompleted, id }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{deadline}</h3>
            <p>{isCompleted.toString()}</p>
            <Link to={`/update/${id}`}>Update This Todo</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
