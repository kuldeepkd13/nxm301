import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { todoID } = useParams();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/todos/${todoID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch(() => {
        alert("Some Error");
      });
  }, [todoID]);

  return (
    <div>
      {todo !== null ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`http://localhost:3001/todos/${todoID}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(todo),
            })
              .then((res) => res.json())
              .then(() => {
                navigate("/");
              })
              .catch(() => {
                alert("Some Error");
              });
          }}
        >
          <input
            value={todo.name}
            onChange={(e) => {
              setTodo({ ...todo, name: e.target.value });
            }}
            type="text"
            id="name"
            placeholder="Name"
          />
          <textarea
            value={todo.description}
            onChange={(e) => {
              setTodo({ ...todo, description: e.target.value });
            }}
            placeholder="Description"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <input
            onChange={(e) => {
              setTodo({ ...todo, deadline: e.target.value });
            }}
            value={todo.deadline}
            type="date"
            id="deadline"
          />
          <input type="submit" value="Submit" />
        </form>
      ) : null}
    </div>
  );
}

export default Update;
