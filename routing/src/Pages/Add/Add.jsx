import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  // ! Controlled Component
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`http://localhost:3001/todos`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              description,
              deadline,
              isCompleted: false,
            }),
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          id="name"
          placeholder="Name"
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          id="desc"
          cols="30"
          rows="10"
        ></textarea>
        <input
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          value={deadline}
          type="date"
          id="deadline"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Add;
